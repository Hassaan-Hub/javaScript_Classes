const { default: chalk } = require('chalk');
const mongooes = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongooes.connect(process.env.CONNECT_MONGODB);
        console.log(chalk.green(`MongoDB Connected`));
    } catch (error) {
        console.error(chalk.red('Error connecting to MongoDB'));
        process.exit(1);
    }
};


module.exports = connectDB;