import { ShowStrategy } from "./ShowStrategy";

export class Tour {
   name_tour: string = "";
   details_tour: string = "";
   date_departure: Date = new Date("12/12/1990");
   date_return: Date = new Date("12/12/1990");
   price_tour: number = 0;
   showStrategy!: ShowStrategy;
   constructor(name_tour: string, details_tour: string, date_departure: Date, date_return: Date, price_tour: number) {
      this.name_tour = name_tour;
      this.details_tour = details_tour;
      this.date_departure = date_departure;
      this.date_return = date_return;
      this.price_tour = price_tour;
   }

   setName_Tour(name_tour: string) {
      this.name_tour = name_tour;
   }
   getName_Tour() {
      return this.name_tour;
   }
   show() {
      this.showStrategy.show(this.name_tour, this.details_tour, this.date_departure, this.date_return, this.price_tour);
   }
}