import { EgyptTour } from "./EgyptTour";
import { TurkeyTour } from "./TurkeyTour";

export interface Visitor{
   visitPriceCompEgypt(egypttour: EgyptTour): any;
   visitPriceCompTurkey(turkeytour: TurkeyTour): any;
}