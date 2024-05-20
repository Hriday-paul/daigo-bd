const userStore = require('../model/users')

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
        const filter = { email: req.body.email };
        const user = await userStore.findOne(filter);
        if (user) {
            return res.status(400).send({ msg: 'user alreadt exist !' });
        }
        const result = await userStore.collection.insertOne(req.body);
        res.status(200).send(result)
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
};

// add or update user
const addOrUpdateUser = async (req, res) => {
    try {
        const filter = { email: req.body.email }
        const user = await userStore.findOne(filter);
        if (user) {
            return res.status(200).send({ messge: 'login successfully' });
        }
        const result = await userStore.collection.insertOne(req.body);
        res.status(200).send({ messge: 'login successfully' });
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userStore.findOne({ email });
        if (user) {
            if (user.password !== password) {
                return res.status(400).send({ message: 'password not match' })
            }
            const {name, email, status, photo, role, _id} = user;
            return res.status(200).send({name, email, status, image : photo, role, _id});
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
    addOrUpdateUser,
    allUsers,
    creatNewUser,
    loginUser
}