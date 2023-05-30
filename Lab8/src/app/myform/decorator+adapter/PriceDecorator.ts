import { Decorator } from "./Decorator";
import { Tour } from "./Tour";

export class PriceDecorator extends Decorator {
   price_tour: number = 0;

   constructor(t: Tour, price_tour: number) {
      super(t);
      this.price_tour = price_tour;
   }

   override show(): void {
      super.show();
      console.log("Ціна туру: " + this.price_tour);
   }
}