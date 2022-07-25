import { IHotels } from "../interfaces/IHotels";
import { IHotelRepository } from "../../../repositories/IHotelRepository";

export class GetSearchHistoryHotelUseCase {
  constructor(
    private hotelSearchRepository: IHotelRepository
  ) { }

  async getSearchHistory(): Promise<IHotels[] | any> {
    try {
      const searchHistory: IHotels[] = await this.hotelSearchRepository.getSearchHistory();
      return searchHistory;
    } catch (error) {
      console.log({ findHotelError: error })
      throw error;
    }
  }
}