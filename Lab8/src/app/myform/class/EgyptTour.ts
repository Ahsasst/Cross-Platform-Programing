import { Tour } from "./Tour";

export class EgyptTour extends Tour {
   constructor(name_tour: string, details_tour: string, date_departure: Date, date_return: Date, price_tour: number) {
      super(name_tour, details_tour, date_departure, date_return, price_tour);
   }
   override show() {
      return "Єгипетські тури: \n" + "Назва туру: " + this.name_tour + " " + " Опис туру: " + this.details_tour
         + " " + "Дата відправлення: " + this.date_departure + " " + "Дата повернення: " + this.date_return
         + " " + "Ціна туру: " + this.price_tour;
   }
}