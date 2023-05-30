import { Tour } from "./Tour";

export interface ShowStrategy {
   show(name_tour: string, details_tour: string, date_departure: Date, date_return: Date, price_tour: number): any;
}