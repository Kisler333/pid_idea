const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})

const app = require('./app')
const DB = process.env.DB_CONNECTION_LINK.replace('{%DBNAME%}',process.env.DB_NAME)

mongoose.connect( DB,{},err => {
    if (!err)
    console.log("the local DB has been connected");
    else console.log(`the local DB has not been connected ... davai ${err}`);
})

const port = process.env.PORT || 8001
const server = app.listen(port,'127.0.0.1',()=>{
    console.log(`server is listening on port ${port}`);
})


