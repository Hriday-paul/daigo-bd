const { validationResult } = require('express-validator');
const userStore = require('../model/users')
const bcrypt = require('bcrypt')

const checkIsAdmin = async (req, res) => {
    try {
        const user = await userStore.findOne({ email: req.params.email });
        let admin = false;
        if (user) {
            admin = user?.role === 'admin';
        }
        res.send({ admin });
    } catch (err) {
        res.status(402).send({ err: err.message })
    }
}

// add  user
const creatNewUser = async (req, res) => {
    try {

        const validationRes = validationResult(req);

        if (!validationRes?.isEmpty()) {
            return res.status(400).send({ isOk: false, message: "Pleale fill all valid input", errors: validationRes.array().map((error) => error?.msg) })
        }

        const { name, email, password } = req.body;

        const filter = { email };
        const user = await userStore.findOne(filter);
        if (user) {
            return res.status(400).send({ message: 'user alreadt exist !' });
        }

        // generate hashed password
        const hashPassword = await bcrypt.hash(password, 12);

        const result = await userStore.collection.insertOne({ name, email, password: hashPassword, status: 'active', provider : 'credential', photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDOlaA7x6auc_yDvEigMgyktyrJBM34AFOaauo6-qXD5zg_vpZlZk9offXf9PMLdA0Lw&usqp=CAU' });

        res.status(200).send({message : 'account create successfully', result})
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
};

// add or update user by google sign in
const addOrUpdateUserBySocialLogin = async (req, res) => {
    try {

        const validationRes = validationResult(req);

        if (!validationRes?.isEmpty()) {
            return res.status(400).send({ isOk: false, message: "Pleale fill all valid input", errors: validationRes.array().map((error) => error?.msg) })
        }

        const { name, email, photo } = req.body;
        const filter = { email }
        const user = await userStore.findOne(filter);

        if (user) {
            if (user?.provider !== 'social') {
                return res.status(400).send({ messge: 'You already login another method' });
            }
            return res.status(200).send({ messge: 'login successfully' });
        }
        await userStore.collection.insertOne({ name, email, password: '', status: 'active', provider : 'social', photo, role : 'user' });
        res.status(200).send({ messge: 'login successfully' });
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
};

const loginUser = async (req, res) => {
    try {
        
        const validationRes = validationResult(req);

        if (!validationRes?.isEmpty()) {
            return res.status(400).send({ isOk: false, message: "Pleale fill all valid input", errors: validationRes.array().map((error) => error?.msg) })
        }

        const { email, password } = req.body;

        const user = await userStore.findOne({ email });

        if (user) {

            const isPasswordMatch = await bcrypt.compare(password, user.password);

            if(user?.provider !== 'credential'){
                return res.status(400).send({ message: 'account found in another method' })
            }

            if (!isPasswordMatch) {
                return res.status(400).send({ message: 'password not match' })
            }

            const { name, email, status, photo, role, _id } = user;
            return res.status(200).send({ name, email, status, image: photo, role, _id });
        }
        res.status(400).send({ message: 'Account not found' })
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
};

// get all users
const allUsers = async (req, res) => {
    try {
        const result = await userStore.find({ role: { $ne: 'admin' } },
            {
                password: 0,
            }
        );
        res.send(result);
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

module.exports = {
    checkIsAdmin,
    addOrUpdateUserBySocialLogin,
    allUsers,
    creatNewUser,
    loginUser
}