import { Schema, model, Document } from "mongoose";
import { IHotels } from "./interfaces/IHotels";


type HotelType = IHotels & Document;
export const Hotel = model<HotelType>("hotel", new Schema(
  {
    chainCode: { type: String, required: true },
    iataCode: { type: String, required: true },
    dupeId: { type: Number, required: true },
    name: { type: String, required: true },
    hotelId: { type: String, required: true },
    geoCode: { type: Object, required: true },
    address: { type: Object, required: true },
  }
)
);