import { IHotels } from "../entities/Hotels/interfaces/IHotels";

export interface IHotelSearchRepository {
  saveSearch(hotels: IHotels[]): Promise<IHotels>;
}