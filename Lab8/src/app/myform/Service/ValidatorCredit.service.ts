import { Injectable } from "@angular/core";
@Injectable({
   providedIn: 'root'
})
export class ValidatorCredit{
   validate_credit(c: number) {
      if (c >= 400 && c <= 5000) {
         return true;
      } else { return false; } 
   }
   constructor() {}
}