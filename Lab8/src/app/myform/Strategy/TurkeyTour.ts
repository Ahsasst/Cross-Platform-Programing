import { Tour } from "./Tour";
import { TurkeyShowStrategy } from "./TurkeyShowStrategy";

export class TurkeyTour extends Tour {
   constructor(name_tour: string, details_tour: string, date_departure: Date, date_return: Date, price_tour: number) {
      super(name_tour, details_tour, date_departure, date_return, price_tour);
      this.showStrategy = new TurkeyShowStrategy();
   }
}