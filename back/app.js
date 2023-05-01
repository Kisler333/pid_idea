const express = require ('express')
const UserRouter = require('./routes/UserRoute')
const morgan=require('morgan')
const cors=require ('cors')

const app = express()
const corsOptions ={
    origin:'http://localhost:3000', 
    // 'http://localhost:3001'
    //http://localhost:3000
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
  }
  app.use(cors(corsOptions));
app.use(morgan('dev'))
app.use(express.json())
app.use('/api/users', UserRouter)





module.exports = app