const mongoose = require('mongoose')

const URI = "mongodb+srv://ecommerce:MajidAli12345@cluster0.mfoypvy.mongodb.net/My-Portfolio"


const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        .then
        console.log('connection successful to DB')
    } catch (error) {
        console.error('database connection failed');
        process.exit(0)
    }
}

module.exports = connectDB;


// ma8055965