import mongoose from "mongoose";

const connectMongoDb = async () => {
    try {
        console.log(process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('sucessfully connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
export default connectMongoDb;