//First step
//is to create database connection so we made it in seprare file
import mongoose from "mongoose";

//we stored the database string in this variable
const mongoURI = "mongodb://0.0.0.0:27017/iNoteBook"; 

//here we created var to store the connection
const connectToMongo = async () => {
  try {
    //here we use connect method for making connection
    //NOTE:connect is no longer have callback that's why we used async await here
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectToMongo;

//Now we go to our main file index.js
