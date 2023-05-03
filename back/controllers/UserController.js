const { request } = require('../app')
const User = require('../models/UserModel')
const { use } = require('../routes/UserRoute')
const AppError = require('../utils/AppError')
const catchAsync = require('../utils/catchAsync')
const unsplash = require('../utils/unsplash')
const bcrypt=require ('bcrypt')

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
    const {gmail, password, passwordConfirm,age,gender,topics} = req.body
    //,country
    //const topics=["Cooking"]
try{
console.log(req.body);
// let opcodeTopics=[0,0,0,0,0,0,0,0,0]
let opcodeTopics=[]
const topicsList=["Cooking","Vogue","Dance","Memes","DIY","Drawing","Makeup","Home Decor","Nails"]
console.log("************************");

console.log(topics.length);
console.log("************************");
let i=0
 topics.forEach(topic => {
    opcodeTopics[i]={hobby_index:topicsList.indexOf(topic)+'',timestamp:Date.now()}
    // opcodeTopics[i]['hobby_index']=topicsList.indexOf(topic)
    //opcodeTopics[i]['timestamp']=Date.now()
    // opcodeTopics[i]=topicsList.indexOf(topic)
    i++
    console.log(opcodeTopics);
});
// for(const i =0;i<topics.size;i++){
//     opcodeTopics[i]=topicsList.indexOf(topics[i])
//     console.log(opcodeTopics);

// }
const temp =[{hobby_index:0,timestamp: Date.now()},{hobby_index:0,timestamp: Date.now()}]
const newUser = await  User.create({gmail, password, passwordConfirm,age,gender,temp}) 
//,country
//save in db logic
console.log(newUser);
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
    const user= await User.findOne({"gmail":gmail}).exec()
    //console.log(user)
    if(!user)
      return next(new AppError(404,'email or password are not recognized'))
    //if(await user.checkPassword(password,user.password)){
        console.log(user);
        if(await bcrypt.compare(password, user.password)){
        const token = '123'
        console.log('LOGIN SUCCESSFUL!' );
            res.status(201).json({
                status: 'success',
                data: token,
                message: 'User logged in'
            })
    }
    else{
        return next(new AppError(404,'email or password are not recognized'))
    }

    // exports.searchImages = async (req, res, next) => {
    //     const searchTerm = req.query.q; // Get search term from query string parameter
    //     try {
    //       // Query the database for images with matching tags or descriptions
    //       const images = await Image.find({ $or: [{ tags: searchTerm }, { description: searchTerm }] });
    //       res.status(200).json({
    //         status: 'success',
    //         data: images
    //       });
    //     } catch (err) {
    //       res.status(404).json({
    //         status: 'fail',
    //         err
    //       });
    //     }
    //   }

    //   exports.searchImages = async (req, res, next) => {
    //     const query = req.query.q; // get the search query from the request query parameters
    //     const perPage = 10; // number of images to return per page
    //     const page = req.query.page || 1; // get the page number from the request query parameters, default to 1 if not specified
    //     const startIndex = (page - 1) * perPage; // calculate the starting index for the images to return
    //     try {
    //       // query the database for images matching the search query
    //       const images = await Image.find({ $text: { $search: query } })
    //         .sort({ createdAt: -1 })
    //         .skip(startIndex)
    //         .limit(perPage);
    //       const totalImages = await Image.countDocuments({ $text: { $search: query } }); // get the total number of images matching the search query
    //       const totalPages = Math.ceil(totalImages / perPage); // calculate the total number of pages
    //       res.status(200).json({
    //         status: 'success',
    //         data: {
    //           images,
    //           page,
    //           totalPages,
    //           totalImages
    //         }
    //       });
    //     } catch (err) {
    //       res.status(500).json({
    //         status: 'error',
    //         message: 'An error occurred while searching for images'
    //       });
    //     }
    //   }
    exports.getTopics = async (req, res, next) =>{
        //here access db to bring users
        const id = req.params.id
        try{
    const user = await User.findByIdAndUpdate(id, {topics: req.params.topics}, {new:true})
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
}
Date.now()
exports.getImages = catchAsync(async(req, res , next)=>{
    //pinterest life style,vogue,gymnastic
    const topics = "ballet,drawing,cooking,makeup"
   const images = await  unsplash.getImages(topics)

res.status(200).json({
    status:'success', 
    images
})



})