const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorsSchema = Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        location: {
            type: String,
        },
        contact: {
            type: String,
            required: true,
        },
        social: {
            type: [Schema.Types.Mixed],
            required: true,
        },
        details: {
            type: String,
            required: true
        },
        services: {
            type: [String],
            required: true
        },
        certificate: [String],
        available: {
            type: [{ day: String, time: String }],
            required: true
        },
        isActive: {
            type: Boolean,
            required: true
        },
        education: {
            type: [{ degre: String, institute_name: String, location: String, subject: String }],
            required: true
        },
        photo : {
            type: String,
            required: true
        }
    }
);

module.exports = doctors = mongoose.model("doctors", doctorsSchema);