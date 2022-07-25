import { IHotelSearchRepository } from "../IHotelSearchRepository";
import { HotelSearch as HotelSearchEntity } from "../../entities/Hotels/HotelSearch";
import { IHotels } from "../../entities/Hotels/interfaces/IHotels";

export default class HotelSearchRepository implements IHotelSearchRepository {
    public async saveSearch(hotels: IHotels[]): Promise<any> {
        try {
            const hotelsEntity = new HotelSearchEntity({ hotels });
            const hotelsSaved: IHotels = await hotelsEntity.save();
            return hotelsSaved;
        } catch (error) {
            throw error;
        }
    }
}
