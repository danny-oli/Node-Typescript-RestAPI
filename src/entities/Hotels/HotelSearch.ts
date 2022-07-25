import { Schema, model, Document } from "mongoose";
import { IHotels } from "./interfaces/IHotels";


type HoteSearchlType = IHotels & Document;
export const HotelSearch = model<HoteSearchlType>("hotel-search", new Schema({
  hotels: { type: Object, required: true }
}, {
  timestamps: true,
})
);