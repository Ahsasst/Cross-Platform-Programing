import { IPrice } from "./IPrice";

export abstract class Tour {
   price: IPrice;

   constructor(price: IPrice) {
      this.price = price;
   }

   abstract show(): void; 
}