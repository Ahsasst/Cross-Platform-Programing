import { Tour } from "./Tour";
import { IPrice } from "./IPrice";

export class EgyptTour extends Tour {
   name_tour: string = "";
   details_tour: string = "";
   date_departure: Date = new Date("12/12/1990");
   date_return: Date = new Date("12/12/1990");

   constructor(name_tour: string, details_tour: string, date_departure: Date, date_return: Date, price: IPrice) {
      super(price);
      this.name_tour = name_tour;
      this.details_tour = details_tour;
      this.date_departure = date_departure;
      this.date_return = date_return;
   }

   override show(): void {
      console.log("Єгипетські тури: \n" + "Назва туру: " + this.name_tour + " " + " Опис туру: " + this.details_tour
         + " " + "Дата відправлення: " + this.date_departure + " " + "Дата повернення: " + this.date_return);
      this.price.tourPrice()
   }
}