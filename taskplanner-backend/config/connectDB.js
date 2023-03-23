const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const connection  = await mongoose.connect("mongodb://0.0.0.0:27017/task-planner");
        console.log(`MongoDB connected: ${connection.connection.host}`);

    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;