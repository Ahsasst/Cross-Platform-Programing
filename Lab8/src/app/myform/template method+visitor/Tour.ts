import { Visitor } from "./Visitor";

export abstract class Tour {
   name_tour: string = "";
   details_tour: string = "";
   date_departure: Date = new Date("12/12/1990");
   date_return: Date = new Date("12/12/1990");
   price_tour: number = 0;
   constructor(name_tour: string, details_tour: string, date_departure: Date, date_return: Date, price_tour: number) {
      this.name_tour = name_tour;
      this.details_tour = details_tour;
      this.date_departure = date_departure;
      this.date_return = date_return;
      this.price_tour = price_tour;
   }
   public createTour(visitor: Visitor) {
      this.show();
      this.accept(visitor);
   }
   abstract show(): any;
   abstract accept(visitor: Visitor): any;
}