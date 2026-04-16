// import mongoose from 'mongoose'

//  export const connectDb=async()=>{
//     await mongoose.connect('mongodb+srv://acceadmy123:12233dfddr@cluster0.nqrzq7f.mongodb.net/acceadmy').then(()=>console.log("Db connected sucessfully"));

// }


import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDb = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("❌ MONGODB_URI is not defined");
    }

    await mongoose.connect(uri);

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};
