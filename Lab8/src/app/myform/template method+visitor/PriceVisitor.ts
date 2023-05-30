import { Visitor } from "./Visitor";
import { EgyptTour } from "./EgyptTour";
import { TurkeyTour } from "./TurkeyTour";

export class PriceVisitor implements Visitor {
   visitPriceCompEgypt(egypttour: EgyptTour) {
      console.log("Ціна за двох (Єгипет): " + egypttour.price_tour * 2);
      console.log("Ціна за трьох (Єгипет): " + egypttour.price_tour * 3);
      console.log("Ціна за чотирьох (Єгипет): " + egypttour.price_tour * 4);
      console.log("Ціна за п'ятьох (Єгипет): " + egypttour.price_tour * 5);
   }
   visitPriceCompTurkey(turkeytour: TurkeyTour) {
      console.log("Ціна за двох (Турція): " + turkeytour.price_tour * 2);
      console.log("Ціна за трьох (Турція): " + turkeytour.price_tour * 3);
      console.log("Ціна за чотирьох (Турція): " + turkeytour.price_tour * 4);
      console.log("Ціна за п'ятьох (Турція): " + turkeytour.price_tour * 5);
   }
}