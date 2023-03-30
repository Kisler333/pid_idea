const User = require('../models/UserModel')
const { use } = require('../routes/UserRoute')
const AppError = require('../utils/AppError')

exports.getUsers = async(req,res,next)=>{
    try{
        const users = await User.find()
        res.status(200).json({
            status: 'success',
            data: users
        })}
    catch(err){
        res.status(404).json({
            status: 'fail',
            err
        })
    }
}

exports.getUser = async (req, res, next) =>{
    //here access db to bring users
    const id = req.params.id
    try{
const user = await User.findById(id)
        res.status(200).json({
            status: 'success',
            user
        })}
        catch(err){
            res.status(404).json({
                status: 'fail',
                err
            })}
        }

exports.signIn =  async(req, res, next) =>{
    const {gmail, password, passwordConfirm,age,gender,country} = req.body
try{
console.log(req.body);
const newUser = await  User.create({gmail, password, passwordConfirm,age,gender,country}) 
//save in db logic
if (!newUser) return next(new AppError(404, 'Cannot create a new user'))

res.status(201).json({
 status: 'success',
 data: newUser,
 message: 'The new user has been created successfully'
})}
catch(err){
    console.log(err);
 res.status(404).json({
     status: 'fail',
     err
 })}
}

exports.logIn = async(req,res,next)=>{
    //console.log (req.body)
    const {gmail,password} = req.body
    if(!password||!gmail)
       return next(new AppError(401,'missing login variable'))
    const user= await User.findOne({"gmail":gmail}).select('password')
    //console.log(user)
    if(!user)
      return next(new AppError(404,'email or password are not recognized'))
    //if(await user.checkPassword(password,user.password)){
        if(user.password == password){
        const token = '123'
        console.log('LOGIN SUCCESSFUL!' );
            res.status(201).json({
                status: 'success',
                data: token,
                message: 'User logged in'
            })
    }

}