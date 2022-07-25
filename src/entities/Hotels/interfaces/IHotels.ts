interface IAddress {
  countryCode: string;
}

export interface IGeoCode {
  latitude: number,
  longitude: number,
}

export interface IHotels {
  chainCode: string;
  iataCode: string;
  dupeId: number;
  name: string;
  hotelId: string;
  geoCode: IGeoCode;
  address: IAddress
}
