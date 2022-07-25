import { FindHotelUseCase } from "./useCases/FindHotelUseCase";
import { HotelController } from "./HotelController";
import { AmadeusHotelProvider } from "../../providers/implementations/AmadeusHotelProvider";
import HotelRepository from "../../repositories/implementations/HotelRepository";
import { GetSearchHistoryHotelUseCase } from "./useCases/GetSearchHistoryHotelUseCase";

const amadeusHotelProvider = new AmadeusHotelProvider()
const hotelSearchRepository = new HotelRepository()


const findHotelUseCase = new FindHotelUseCase(
  amadeusHotelProvider,
  hotelSearchRepository,
)

const getSearchHistoryHotelUseCase = new GetSearchHistoryHotelUseCase(
  hotelSearchRepository
)
const hotelController = new HotelController(
  findHotelUseCase,
  getSearchHistoryHotelUseCase
)

export { findHotelUseCase, hotelController }