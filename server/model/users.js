const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
        },
        status: {
            type: String,
            default : 'active'
        },
        photo : {
            type : String,
            required : true,
            default : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDOlaA7x6auc_yDvEigMgyktyrJBM34AFOaauo6-qXD5zg_vpZlZk9offXf9PMLdA0Lw&usqp=CAU'
        },
        provider : {
            type : String,
            required : true,
            enum : ['credential', 'social'],
            default : 'credential'
        },
        role : {
            type : String,
            enum : ['user', 'admin'],
            default : 'user'
        }
    }
);

module.exports = users = mongoose.model("users", userSchema);