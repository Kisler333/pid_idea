const mongoose = require('mongoose')
const bcrypt=require('bcrypt')

const userSchema = new mongoose.Schema({
    gmail: {
        type: String,
        required: [true, 'The user must have an email'],
        unique: [true, 'The user based on this email is exist, Plesae Login']
    },
    password: {
        type: String,
        required:[true, 'Please provide a password'],
        minLength:[8, 'The password must contain at least 8 characters'],
        select: false
    },
    passwordConfirm: {
        type: String,
        required:[true, 'Please confirm your password'],
        validate:{
            validator: function(el){
                return this.password === el
            },
            message: "Passwords don't match"
        } 
    },
    age: {
        type: String,
        required:[true, 'Please provide an age'],
        /*validate:{
            validator: function(){
                return this.Age >=12
            },
            message: "Age must be at least 12"
        } */
        
    },
    gender: {
        type: String,
        enum: ["1", "2","3"],
            required : [true, 'Please provide a gender']
       
       // select: Female ,Male ,Other
    },
    country: {
        type: String,
        units: {
            type: String,
            enum: ['USA', 'Israel'],
            required : [true, 'Please provide a country']
        }
       
       // select: USA ,Israel
    },
    
    //,
    // Genere:{
    //     type: String,
    //     required: [true,'The user most have at least one Genere']
    // },
    // mode:{
    //     type: String,
    //     required: [true,'User most have a specific mode']
    // }
})

userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password, 10) //encription
    this.passwordConfirm = undefined
    next()
})
userSchema.methods.checkPassword = async function(stringPass, hashPass){
    return await bcrypt.compare(stringPass, hashPass)
}

const User = mongoose.model('User', userSchema)

module.exports = User
