const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    OrgID:{
        type:String,
        required:true,
    },
    Orgname:{
        type:String,
        required:true,
    },
    UserName:{
        type:String,
        required:true,
    },
},{collection:'Bookings'})

const BookingModel = mongoose.model("Bookings",bookingSchema)
module.exports = BookingModel
    