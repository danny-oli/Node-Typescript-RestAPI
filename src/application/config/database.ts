import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connect = async (): Promise<Mongoose> =>
  await mongoose.connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

export const close = (): Promise<void> => mongoose.connection.close();