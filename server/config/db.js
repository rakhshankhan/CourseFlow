const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true });
        console.log("MongoDB is Connected...");
    }
    catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;