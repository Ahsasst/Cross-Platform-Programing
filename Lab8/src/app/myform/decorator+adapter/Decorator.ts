import { Tour } from "./Tour";

export class Decorator extends Tour { 
   tour: Tour;

   constructor(t: Tour) {
      super();
      this.tour = t;
   }

   show(): void {
      this.tour.show();
   }
}