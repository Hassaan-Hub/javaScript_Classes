require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.CONNECT_MONGODB)

        console.log('mongo db connected');
    }catch(error){
        console.log('mongo db is not connected');
    }
}

module.exports = connectDB;