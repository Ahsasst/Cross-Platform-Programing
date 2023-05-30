import { ShowStrategy } from "./ShowStrategy";

export class EgyptShowStrategy implements ShowStrategy {
   show(name_tour: string, details_tour: string, date_departure: Date, date_return: Date, price_tour: number) {
      console.log("Єгипетські тури: \n" + "Назва туру: " + name_tour + " " + " Опис туру: " + details_tour
         + " " + "Дата відправлення: " + date_departure + " " + "Дата повернення: " + date_return
         + " " + "Ціна туру: " + price_tour);
   }
}