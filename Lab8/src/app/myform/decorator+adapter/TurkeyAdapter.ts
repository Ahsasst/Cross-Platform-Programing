import { Tour } from "./Tour";
import { EgyptTour } from "./EgyptTour";

export class TurkeyAdapter extends Tour {
   private p_etour: EgyptTour;

   constructor(p: EgyptTour) {
      super();
      this.p_etour = p;
   }

   show(): void {
      console.log("Турецькі тури: \n" + "Назва туру: " + this.p_etour.name_tour + " " + " Опис туру: " + this.p_etour.details_tour 
         + " " + "Дата відправлення: " + this.p_etour.date_departure + " " + "Дата повернення: " + this.p_etour.date_return);
   }
}