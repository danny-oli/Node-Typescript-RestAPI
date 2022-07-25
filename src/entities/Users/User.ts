import { Schema, model, Document } from "mongoose";
import { IUser } from "./interfaces/IUser";


type UserType = IUser & Document;
export const User = model<UserType>("user", new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    key: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)
);