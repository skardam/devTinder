const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.qeldy.mongodb.net/devTinder");
}

module.exports = connectDB;