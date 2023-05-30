import { TourType } from "../../class/TourType";

export interface IBuilder {
   setTourType(type: TourType): void;
   setTourName(tname: string): void;
   setTourDetails(tdetails: string): void;
   setTourDateD(tdd: Date): void;
   setTourDateR(tdr: Date): void;
   setTourPrice(tprice: number): void;
}