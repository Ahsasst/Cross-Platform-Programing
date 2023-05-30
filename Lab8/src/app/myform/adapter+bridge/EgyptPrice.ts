import { IPrice } from "./IPrice";
import { Tour } from "./Tour";

export class EgyptPrice implements IPrice{
   price_tour: number = 0;

   constructor(price_tour: number) {
      this.price_tour = price_tour;
   }
   tourPrice() : void {
      console.log("Ціна туру для Єгипту: " + this.price_tour);;
   }
}