import { Request, Response } from "express";
import { FindHotelUseCase } from "./useCases/FindHotelUseCase";

export class HotelController {
  constructor(
    private findHotelUseCase: FindHotelUseCase,
  ) { }

  async findHotel(request: Request, response: Response): Promise<Response | any> {
    const { cityCode } = request.params;

    try {
      const hotels = await this.findHotelUseCase.findHotel({
        cityCode
      })
      response.status(200).send({ hotels });
    } catch (error) {
      return response.status(400).json({ error: error || 'Unexpected error.' })
    }
  }
}