import { IHotels } from "../entities/Hotels/interfaces/IHotels";

export interface ICityCode {
  cityCode: string;
}
export interface IAmadeusHotelProvider {
  findHotel(cityCode: ICityCode): Promise<IHotels[]>;
  // saveSearch(hotelSearch: IHotels[]): Promise<any>
}