const mongoose=require("mongoose")

const connectDb=async()=>{
    try {
        const connect=mongoose.connect('mongodb://127.0.0.1:27017/Memoire', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to mongo")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb;


