import { Tour } from "./Tour";
import { EgyptTour } from "./EgyptTour";
import { IPrice } from "./IPrice";

export class TurkeyAdapter extends Tour {
   p_etour: EgyptTour;

   constructor(p: EgyptTour, price: IPrice) {
      super(price);
      this.p_etour = p;
   }

   override show(): void {
      console.log("Турецькі тури: \n" + "Назва туру: " + this.p_etour.name_tour + " " + " Опис туру: " + this.p_etour.details_tour 
         + " " + "Дата відправлення: " + this.p_etour.date_departure + " " + "Дата повернення: " + this.p_etour.date_return);
      this.price.tourPrice();
   }
}