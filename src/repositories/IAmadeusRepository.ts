export interface IAmadeusRepository {
  findHotel(cityCode: string): Promise<any>;
}