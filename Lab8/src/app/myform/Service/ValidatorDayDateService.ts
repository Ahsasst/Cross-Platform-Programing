import { Injectable } from "@angular/core";
import { StringToDate } from "./StringToDate";

@Injectable({
   providedIn: 'root'
})

export class ValidatorDayDateService{
   constructor() { }
   
   diff_years(dt1: Date, dt2: Date) {
      const diff = Math.abs(dt2.getTime() - dt1.getTime());
      const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24)); 
      return diffDays;
   }

   validate_diff_date(date1: string, date2: string) {
      let d1 = StringToDate(date1);
      let d2 = StringToDate(date2);
      if (this.diff_years(d1, d2) < 5 || this.diff_years(d1, d2) > 14)
         return false
      else return true;
   }
}