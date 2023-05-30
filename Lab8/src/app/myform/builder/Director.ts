import { IBuilder } from "./interface/IBuilder";
import { TourType } from "../class/TourType";

export class Director{
   constructEgyptTour(builder: IBuilder, name_tour: string,
      details_tour: string, date_departure: Date, date_return: Date, price_tour: number): void {
      builder.setTourType(TourType.EGYPT);
      builder.setTourName(name_tour);
      builder.setTourDetails(details_tour);
      builder.setTourDateD(date_departure);
      builder.setTourDateR(date_return);
      builder.setTourPrice(price_tour);
   }

   constructTurkeyTour(builder: IBuilder, name_tour: string,
      details_tour: string, date_departure: Date, date_return: Date, price_tour: number): void {
      builder.setTourType(TourType.TURKEY);
      builder.setTourName(name_tour);
      builder.setTourDetails(details_tour);
      builder.setTourDateD(date_departure);
      builder.setTourDateR(date_return);
      builder.setTourPrice(price_tour);
   }
}