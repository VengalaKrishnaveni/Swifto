const mongoose = require('mongoose')

const provideSchema = new mongoose.Schema({
    Orgname:{
        type:String,
        required:true,
    },
    Location:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Contact:{
        type:String,
        required:true,
    },
    Description:{
        type:String,
        required:true,
    },
    Rating:{
        type:Number,
        required:true,
    },
},{collection:'Providers'})

const ProviderModel = mongoose.model("Providers",provideSchema)
module.exports = ProviderModel