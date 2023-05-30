import { TestBed } from "@angular/core/testing";
import { ValidatorCredit } from "./ValidatorCredit.service";

describe('ValidatorService', () => {
   let service: ValidatorCredit;
   beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(ValidatorCredit);
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   })

   it('Перевіряємо для кредиту 30 значення false', () => {
      let s = service.validate_credit(30);
      expect(s).toBe(false);
   })

   it('Перевіряємо для кредиту 20 значення true', () => {
      let s = service.validate_credit(20);
      expect(s).toBe(true);
   })



})