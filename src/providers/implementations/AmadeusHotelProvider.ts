import { IAmadeusHotelProvider, ICityCode } from "../IAmadeusHotelProvider";
var Amadeus = require('amadeus');

export class AmadeusHotelProvider implements IAmadeusHotelProvider {
    private transporter: any;

    constructor() {
        try {
            this.transporter = new Amadeus({
                clientId: process.env.AMADEUS_API_KEY,
                clientSecret: process.env.AMADEUS_API_SECRET,
            });

        } catch (error) {
            throw error;
        }
    }
    async findHotel(cityCodeInterface: ICityCode): Promise<any> {
        try {
            const response = await this.transporter.referenceData.locations.hotels.byCity.get({
                cityCode: cityCodeInterface.cityCode,
            }).then((response: any) => {
                return response.data;
            }).catch((responseError: any) => {
                return { errorCode: responseError.response.statusCode, message: responseError.code };
            });

            if (response.errorCode) throw response;
            return response;
        } catch (error) {
            console.log({ error })
            throw error;
        }
    }
}