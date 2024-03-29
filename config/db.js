const mongoose = require('mongoose');

const db = process.env.MONGO_URI;

mongoose.set("strictQuery", false);
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected And helloo with MongoDB");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;