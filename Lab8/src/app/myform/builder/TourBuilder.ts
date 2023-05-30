import { IBuilder } from "./interface/IBuilder";
import { TourType } from "../class/TourType";
import { Tour } from "./Tour";

export class TourBuilder implements IBuilder {
   type_tour!: TourType;
   name_tour: string = "";
   details_tour: string = "";
   date_departure: Date = new Date("12/12/1990");
   date_return: Date = new Date("12/12/1990");
   price_tour: number = 0;

   setTourType(type: TourType): void {
      this.type_tour = type;
   }

   setTourName(tname: string): void{
      this.name_tour = tname;
   }

   setTourDetails(tdetails: string): void {
      this.details_tour = tdetails;
   }

   setTourDateD(tdd: Date): void {
      this.date_departure = tdd;
   }

   setTourDateR(tdr: Date): void {
      this.date_return = tdr;
   }

   setTourPrice(tprice: number): void {
      this.price_tour = tprice;
   }

   getResult(): Tour{
      return new Tour(this.name_tour, this.details_tour, this.date_departure, this.date_return, this.price_tour);
   }
}