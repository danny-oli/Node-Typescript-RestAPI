import { HotelSearch as HotelSearchEntity } from "../../entities/Hotels/HotelSearch";
import {IHotelRepository} from '../IHotelRepository'
import { IHotels } from "../../entities/Hotels/interfaces/IHotels";

export default class HotelRepository implements IHotelRepository {
    public async saveSearch(hotels: IHotels[]): Promise<any> {
        try {
            const hotelsEntity = new HotelSearchEntity({ hotels });
            const hotelsSaved: IHotels = await hotelsEntity.save();
            return hotelsSaved;
        } catch (error) {
            throw error;
        }
    }

    public async getSearchHistory(): Promise<IHotels[] | any> {
        try {
            const searchHistory = HotelSearchEntity.find();
            if (!searchHistory) throw new Error(`Search History not found`)
            return searchHistory;
        } catch (error) {
            throw error;
        }
    }
}
