const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    Name:{
        type:String,
        required:true,
    }
},{collection:'Users'})

const UserModel = mongoose.model("Users",UserSchema)

module.exports = UserModel
