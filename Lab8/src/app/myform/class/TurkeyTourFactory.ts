import { Tour } from "./Tour";
import { TourType } from "./TourType";
import { TourFactory } from "./TourFactory";
import { TurkeyTour } from "./TurkeyTour";

export class TurkeyTourFactory extends TourFactory {

   override createTour(type: TourType, name_tour: string, details_tour: string, date_departure: Date, date_return: Date, price_tour: number): Tour {
      let tour: Tour;
      switch (type) {
         case "TURKEY":
            tour = new TurkeyTour(name_tour, details_tour, date_departure, date_return, price_tour);
            break;
         default:
            throw new Error("Invalid tour type");
      }
      return tour;
   }
}