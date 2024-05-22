const doctorStore = require('../model/doctors');


const addDoctor = async (req, res) => {
    try {
        const {
            name,
            email,
            title,
            photo,
            location,
            contact,
            social,
            details,
            services,
            certificate,
            available,
            isActive,
            education,
        } = req.body;
        const doctor = await doctorStore.findOne({ email: email });
        if (doctor) {
            return res.status(400).send({ message: 'Doctor already exist' });
        }
        const result = await doctorStore.collection.insertOne({
            name,
            email,
            title,
            photo,
            location,
            contact,
            social,
            details,
            services,
            certificate,
            available,
            isActive,
            education,
        });
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}

const getAllDoctorrs = async (req, res) => {
    try {
        const doctors = await doctorStore.find().sort({isActive : 1});
        res.status(200).send(doctors);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

const getActiveDoctors = async (req, res) => {
    try {
        const doctors = await doctorStore.find({ isActive: true });
        res.status(200).send(doctors);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

const doctorDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const doctors = await doctorStore.findOne({ _id: id });
        res.status(200).send(doctors);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
};

module.exports = {
    addDoctor,
    getActiveDoctors,
    getAllDoctorrs,
    doctorDetails
}