import { FindHotelUseCase } from "./useCases/FindHotelUseCase";
import { HotelController } from "./HotelController";
import { AmadeusHotelProvider } from "../../providers/implementations/AmadeusHotelProvider";
import HotelSearchRepository from "../../repositories/implementations/HotelSearchRepository";

const amadeusHotelProvider = new AmadeusHotelProvider()
const hotelSearchRepository = new HotelSearchRepository()

const findHotelUseCase = new FindHotelUseCase(
  amadeusHotelProvider,
  hotelSearchRepository,
)

const hotelController = new HotelController(
  findHotelUseCase,
)

export { findHotelUseCase, hotelController }