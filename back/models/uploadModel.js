const mongoose = require('mongoose')
const bcrypt=require('bcrypt')

const uploadSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'The user must have an user name']
    },
    title: {
        type: String,
        required:[false],
    },
    description: {
        type: String,
        required:[false],
    },
    link: {
        type: String,
        required:[false],
    },
    size: {
        type: String,
        required:[true],
    },
    
    uploadDate: {
        type: Date,
        required:[false],
    },
    path:{
        type:String,
        required:[true],
        unique:[true],
    }
})
const Uploads = mongoose.model('Uploads', uploadSchema)

module.exports = Uploads
