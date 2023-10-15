import mongoose from "mongoose";

const mongoURI = "mongodb://0.0.0.0:27017/"; // Specify the database name in the URI

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectToMongo;
