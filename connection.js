const mongoose=require("mongoose");

const MONGODB_URL='mongodb+srv://admin:admin@app.fkhq7.mongodb.net/?retryWrites=true&w=majority&appName=app';

const connectDB =async () =>{
    await mongoose.connect(MONGODB_URL,{
        useCreateIndex:true,
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify:false
    });
    console.log('Payment Management Data Connection is running');
}
module.exports=connectDB;

