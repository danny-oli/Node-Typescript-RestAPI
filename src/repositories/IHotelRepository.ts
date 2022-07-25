import { IHotels } from "../entities/Hotels/interfaces/IHotels";

export interface IHotelRepository {
    saveSearch(hotels: IHotels[]): Promise<IHotels>;
    getSearchHistory(): Promise<IHotels[] | any>;
}