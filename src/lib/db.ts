import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    try {
        if(!process.env.MONGO_URI)  throw new Error('MONGO_URI not found');
        if(isConnected) return //console.log('Already connected to Database');

        await mongoose.connect(process.env.MONGO_URI ?? "");
        isConnected = true;
        //console.log('Connected to Database')
    } catch(error: any) {
        throw new Error(error.message);
    }
}


