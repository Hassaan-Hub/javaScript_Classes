const mongooes = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongooes.connect(process.env.CONNECT_MONGODB);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error('Error connecting to MongoDB');
        process.exit(1);
    }
};


module.exports = connectDB;