import { AbstractControl, ValidatorFn } from "@angular/forms";
import { ValidatorCredit } from "./ValidatorCredit.service";

export function creditValidator(): ValidatorFn {
   return (control: AbstractControl): { [key: string]: boolean } | null => {
      let validator = new ValidatorCredit();
      let valid = !control.value || validator.validate_credit(control.value)
      return valid ? null : { date: true }
   }
}