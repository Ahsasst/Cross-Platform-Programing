import { Tour } from "./Tour";
import { TourType } from "./TourType";

export abstract class TourFactory {
   ttype: TourType;
   tname: string = "";
   tdetails: string = "";
   tdated: Date = new Date("12/12/1990");
   tdater: Date = new Date("12/12/1990");
   tprice: number = 0;
   

   constructor(type_tour: TourType, name_tour: string, details_tour: string, date_departure: Date, date_return: Date, price_tour: number) {
      this.ttype = type_tour;
      this.tname = name_tour;
      this.tdetails = details_tour;
      this.tdated = date_departure;
      this.tdater = date_return;
      this.tprice = price_tour;
   }

   public showTour(type: TourType, name_tour: string, details_tour: string, date_departure: Date, date_return: Date, price_tour: number): Tour {
      let tour: Tour = this.createTour(type, name_tour, details_tour, date_departure, date_return, price_tour);

      tour.show();

      console.log("Тур створено!");
      console.log(tour.show());
      return tour;
   }

   abstract createTour(type: TourType, name_tour: string, details_tour: string, date_departure: Date, date_return: Date, price_tour: number): Tour;
}