import { IAmadeusHotelProvider } from "../../../providers/IAmadeusHotelProvider";
import { IHotelSearchRepository } from "../../../repositories/IHotelSearchRepository";
import { IFindHotelRequestDTO } from "../interfaces/IFindHotelDTO";
import { IHotels } from "../interfaces/IHotels";

export class FindHotelUseCase {
  constructor(
    private amadeusProvider: IAmadeusHotelProvider,
    private hotelSearchRepository: IHotelSearchRepository
  ) { }

  async findHotel(data: IFindHotelRequestDTO): Promise<IHotels[] | any> {
    try {
      const hotels: IHotels[] = await this.amadeusProvider.findHotel(data);
      // console.log({ hotels })
      const savedHotels = await this.hotelSearchRepository.saveSearch(hotels);
      return savedHotels;
    } catch (error) {
      console.log({ findHotelError: error })
    }
  }
}