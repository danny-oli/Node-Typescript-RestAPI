import { Request, Response } from "express";
import { GetSearchHistoryHotelUseCase } from "./useCases/GetSearchHistoryHotelUseCase";
import { FindHotelUseCase } from "./useCases/FindHotelUseCase";

export class HotelController {
  constructor(
    private findHotelUseCase: FindHotelUseCase,
    private getSearchHistoryHotelUseCase: GetSearchHistoryHotelUseCase
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
  async getSearchHistory(_request: Request, response: Response): Promise<Response | any> {

    try {
      const hotels = await this.getSearchHistoryHotelUseCase.getSearchHistory()
      response.status(200).send({ body: hotels });
    } catch (error) {
      return response.status(400).json({ error: error || 'Unexpected error.' })
    }
  }
}