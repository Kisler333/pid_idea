const { request } = require('../app')
const User = require('../models/UserModel')
const Uploads = require('../models/uploadModel')
const { use } = require('../routes/UserRoute')
const AppError = require('../utils/AppError')
const catchAsync = require('../utils/catchAsync')
const unsplash = require('../utils/unsplash')
const bcrypt = require('bcrypt')
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.status(200).json({
            status: 'success',
            data: users
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            err
        })
    }
}

exports.getUser = async (req, res, next) => {
    //here access db to bring users
    const id = req.params.id
    try {
        const user = await User.findById(id)
        res.status(200).json({
            status: 'success',
            user
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            err
        })
    }
}
exports.signIn = async (req, res, next) => {
    const { gmail, password, passwordConfirm, age, gender, topics } = req.body
    //,country
    //const topics=["Cooking"]
    try {
        console.log(req.body);
        // let opcodeTopics=[0,0,0,0,0,0,0,0,0]
        let userTopics = []
        const topicsList = ["Cooking", "Vogue", "Dance", "Memes", "DIY", "Drawing", "Makeup", "Home Decor", "Nails"]
        console.log("********");

        console.log(topics.length);
        console.log("********");
        let i = 0
        topics.forEach(topic => {
            userTopics[i] = { hobby_index: topicsList.topic, timestamp: Date.now(), hobby_name: topic };
            i++;
        });
        console.log(userTopics);
        // for(const i =0;i<topics.size;i++){
        //     opcodeTopics[i]=topicsList.indexOf(topics[i])
        //     console.log(opcodeTopics);

        // }
        // const temp =[{hobby_index:0,timestamp: Date.now()},{hobby_index:0,timestamp: Date.now()}]
        const newUser = await User.create({ gmail, password, passwordConfirm, age, gender, topics: userTopics })
        //,country
        //save in db logic
        console.log(newUser);
        if (!newUser) return next(new AppError(404, 'Cannot create a new user'))

        res.status(201).json({
            status: 'success',
            data: newUser,
            message: 'The new user has been created successfully'
        })
    }
    catch (err) {
        console.log(err);
        res.status(404).json({
            status: 'fail',
            err
        })
    }
}

exports.logIn = async (req, res, next) => {
    //console.log (req.body)
    const { gmail, password } = req.body
    if (!password || !gmail)
        return next(new AppError(401, 'missing login variable'))
    const user = await User.findOne({ "gmail": gmail }).exec()
    //console.log(user)
    if (!user)
        return next(new AppError(404, 'email or password are not recognized'))
    //if(await user.checkPassword(password,user.password)){
    console.log(user);
    if (await bcrypt.compare(password, user.password)) {
        const token = '123'
        console.log('LOGIN SUCCESSFUL!');
        res.status(201).json({
            status: 'success',
            data: token,
            message: 'User logged in'
        })
    }
    else {
        return next(new AppError(404, 'email or password are not recognized'))
    }
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


//new
exports.getTopics = async (req, res, next) => { // this is not get topics, this is add topics to user function
    //here access db to bring users
    // req should have id and a new topic object
    const id = req.params.id;
    const topicToAdd = req.params.topic;
    try {
        const user = await User.findByIdAndUpdate(id, { topics: req.params.topics }, { new: true })
        res.status(200).json({
            status: 'success',
            user
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            err
        })
    }
}


// function to update user topic 
exports.updateTopics = async (req, res, next) => {
    const id = req.id;
    const topicToAdd = req.params.topic;
    try {
        let user = await getUserById(id);
        if (!user) return next(new AppError(404, 'User not found'));
        let userTopics = user.topics;
        if (userTopics.length < 5) {
            userTopics.push(topicToAdd);
        }
        else {
            const minTimestamp = userTopics.reduce((min, current) => current.timestamp < min.timestamp ? current : min, userTopics[0]);
            const newData = userTopics.filter((object) => object.timestamp !== minTimestamp.timestamp);
            newData.push(topicToAdd);
        }
        const updatedUser = await User.findByIdAndUpdate(id, { topics: newData }, { new: true })

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            err
        })
    }

}
//function to get user data by ID
async function getUserById(id) {
    try {
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err)
    }
}
// function to get all users
async function getAllUsers() {
    try {
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err)
    }
}

Date.now()
exports.getImages = catchAsync(async (req, res, next) => {
    //pinterest life style,vogue,gymnastic
    const { search } = req.body
    if (!search) {
        search = "sport"
    }
    const topics = search
    const images = await unsplash.getImages(topics)

    res.status(200).json({
        status: 'success',
        images
    })
})

exports.search = async (req, res, next) => {
    const { search } = req.body
    console.log(search);
    res.status(200).json({
        status: 'success',
        search
    })
}
exports.image = async (req, res, next) => {
    const { userName, title, description, link, base64, size, uploadDate } = req.body
    console.log(base64);
    const path = uuidv4()
    const newUpload = await Uploads.create({ userName, title, description, link, size, uploadDate, path })
    // Extract base64 data from the string
    // const base64Data = base64
    // if (base64.indexOf('data:image/png;base64,')!==-1) {
       const base64Data = base64.replace(/^data:image\/png;base64,/, "");
    // } else if (base64.includes('data:image/jpg;base64,')) {
    //     base64Data = base64Data.replace(/^data:image\/jpg;base64,/, "");
    // } else if (base64.includes('data:image/jpeg;base64,')) {
    //     base64Data = base64Data.replace(/^data:image\/jpeg;base64,/, "");

    // }

//   const base64Data = base64.replace(/^data:image\/png;base64,/, "");
//    base64Data = base64Data.replace(/^data:image\/jpg;base64,/, "");

// Create a buffer from the base64 data
const buffer = Buffer.from(base64Data, 'base64');

// Save the buffer as an image file
const filePath = './userUpload/' + path + '.png';
fs.writeFile(filePath, buffer, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Image saved successfully!');
    }
});
res.status(200).json({
    status: 'success',
    base64
})
}

