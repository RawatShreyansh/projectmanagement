import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionUri = `${process.env.MONGODB_URL}/${process.env.DB_NAME}`;

    console.log("Attempting connection to:", connectionUri);

    const connectionInstance = await mongoose.connect(connectionUri);
    console.log(`✅ MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("❎ Failed to connect with MongoDB with error :", error);
    process.exit(1);
  }
};

export default connectDB;