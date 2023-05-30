import { IPrice } from "./IPrice";
import { Tour } from "./Tour";

export class TurkeyPrice implements IPrice {
   price_tour: number = 0;

   constructor(price_tour: number) {
      this.price_tour = price_tour;
   }
   tourPrice(): void {
      console.log("Ціна туру для Турції: " + this.price_tour);;
   }
}