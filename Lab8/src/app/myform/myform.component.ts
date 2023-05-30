import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Course } from './class/Course';
import { TourType } from './class/TourType';
import { TourFactory } from './class/TourFactory';
import { EgyptTourFactory } from './class/EgyptTourFactory';
import { TurkeyTourFactory } from './class/TurkeyTourFactory';
import { Validators } from '@angular/forms';
import { creditValidator } from './Service/creditValidator';
import { dateValidator } from './Service/dateValidator';
import { ValidatorDayDateService } from './Service/ValidatorDayDateService';
import { ValidatorCredit } from './Service/ValidatorCredit.service';
import { AlertController } from '@ionic/angular';
import { TourBuilder } from './builder/TourBuilder';
import { EgyptTourBuilder } from './builder/EgyptTourBuilder';
import { TurkeyTourBuilder } from './builder/TurkeyTourBuilder';
import { Tour } from './builder/Tour';
import { EgyptTour as EG } from './builder/EgyptTour';
import { TurkeyTour as TT } from './builder/TurkeyTour';
import { Director } from './builder/Director';
import { EgyptTourSingleton } from './singleton/EgyptTourSingleton';
import { TurkeyTourSingleton } from './singleton/TurkeyTourSingleton';
import { Tour as Tourr } from './decorator+adapter/Tour';
import { Tour as Tourrr } from './adapter+bridge/Tour';
import { PriceDecorator } from './decorator+adapter/PriceDecorator';
import { EgyptTour } from './decorator+adapter/EgyptTour';
import { TurkeyAdapter } from './decorator+adapter/TurkeyAdapter';
import { TurkeyAdapter as TA } from './adapter+bridge/TurkeyAdapter';
import { IPrice } from './adapter+bridge/IPrice';
import { EgyptPrice } from './adapter+bridge/EgyptPrice';
import { EgyptTour as ET } from './adapter+bridge/EgyptTour';
import { TurkeyPrice } from './adapter+bridge/TurkeyPrice';
import { Tour as Temp } from './template method+visitor/Tour';
import { EgyptTour as ETemp } from './template method+visitor/EgyptTour';
import { TurkeyTour as TTemp } from './template method+visitor/TurkeyTour';
import { Visitor } from './template method+visitor/Visitor';
import { PriceVisitor } from './template method+visitor/PriceVisitor';
import { Tour as Strat } from './Strategy/Tour';
import { EgyptTour as EStrat } from './Strategy/EgyptTour';
import { TurkeyTour as TStrat } from './Strategy/TurkeyTour';

@Component({
   selector: 'app-myform',
   templateUrl: './myform.component.html',
   styleUrls: ['./myform.component.scss'],
})
export class MyformComponent implements OnInit {

   tourForm!: FormGroup;
   tour!: TourFactory;

   @Output() tourAdd: EventEmitter<TourFactory> = new EventEmitter<TourFactory>();
   constructor(private fb: FormBuilder, private alertController: AlertController) {
      this.tourForm = this.fb.group({
         tourType: ['', [Validators.required]],
         tourName: ['', [Validators.required]],
         tourDetails: [''],
         tourDated: ['', [Validators.required, dateValidator()]],
         tourDater: ['', [Validators.required, dateValidator()]],
         tourPrice: ['', [Validators.required, creditValidator()]],
      });
   }

   onSubmit() {
      let formData = this.tourForm.value.tourType;
      let tname = this.tourForm.value.tourName;
      let tdetails = this.tourForm.value.tourDetails;
      let tdated = this.tourForm.value.tourDated;
      let tdater = this.tourForm.value.tourDater;
      let tprice = this.tourForm.value.tourPrice;
      let valid = new ValidatorDayDateService();

      if (formData === 'Egypt') {
         console.log("Egypt");
         if (valid.validate_diff_date(tdated, tdater)) {
            // this.tour = new EgyptTourFactory(TourType.EGYPT, tname, tdetails, tdated, tdater, tprice);
            // this.tour.showTour(TourType.EGYPT, tname, tdetails, tdated, tdater, tprice);
            // console.log("Submit");
            // this.tourAdd.emit(this.tour);

            // let director: Director = new Director();
            // let egyptbuilder: EgyptTourBuilder = new EgyptTourBuilder();
            // director.constructEgyptTour(egyptbuilder, tname, tdetails, tdated, tdater, tprice);
            // let egypttour: EG = egyptbuilder.getResult();
            // console.log("Submit");
            // console.log(egypttour.show());
            // this.tourAdd.emit(this.tour);

            // let egypttour: EgyptTourSingleton = EgyptTourSingleton.getEgyptTourSingleton(tname, tdetails, tdated, tdater, tprice);
            // let egypttour1: EgyptTourSingleton = EgyptTourSingleton.getEgyptTourSingleton("Hurhada", "tdetails", tdated, tdater, tprice);
            // console.log(egypttour.show());
            // console.log(egypttour1.show());

            // let egypttour: Tourr = new PriceDecorator(new EgyptTour(tname, tdetails, tdated, tdater), tprice);
            // egypttour.show();
            
            // let egyptprice: EgyptPrice = new EgyptPrice(tprice);
            // let t: Tourrr = new ET(tname, tdetails, tdated, tdater, egyptprice);
            // t.show();
            
            let egypttour: ETemp = new ETemp(tname, tdetails, tdated, tdater, tprice);
            let visitor: PriceVisitor = new PriceVisitor();
            egypttour.createTour(visitor);
            // egypttour.accept(visitor);

            // let egypttour: Strat = new EStrat(tname, tdetails, tdated, tdater, tprice);
            // egypttour.show();
         }
         else {
            this.presentAlert("Тур не може бути менше 5 днів та більше 14")
         }
      } else {
         console.log("Turkey");
         if (valid.validate_diff_date(tdated, tdater)) {
            // this.tour = new TurkeyTourFactory(TourType.TURKEY, tname, tdetails, tdated, tdater, tprice);
            // this.tour.showTour(TourType.TURKEY, tname, tdetails, tdated, tdater, tprice);
            // console.log("Submit");
            // this.tourAdd.emit(this.tour);

            // let director: Director = new Director();
            // let turkeybuilder: TurkeyTourBuilder = new TurkeyTourBuilder();
            // director.constructTurkeyTour(turkeybuilder, tname, tdetails, tdated, tdater, tprice);
            // let turkeytour: TT = turkeybuilder.getResult();
            // console.log("Submit");
            // console.log(turkeytour.show());
            // this.tourAdd.emit(this.tour);

            // let turkeytour: TurkeyTourSingleton = TurkeyTourSingleton.getTurkeyTourSingleton(tname, tdetails, tdated, tdater, tprice);
            // let turkeytour1: TurkeyTourSingleton = TurkeyTourSingleton.getTurkeyTourSingleton("Antalya", "tdetails", tdated, tdater, tprice);
            // console.log(turkeytour.show());
            // console.log(turkeytour1.show());

            // let t: Tourr = new PriceDecorator(new TurkeyAdapter(new EgyptTour(tname, tdetails, tdated, tdater)), tprice);
            // t.show();
            
            // let turkeyprice: TurkeyPrice = new TurkeyPrice(tprice);
            // let t: Tourrr = (new TA(new ET(tname, tdetails, tdated, tdater, turkeyprice), turkeyprice));
            // t.show();

            // let turkeytour: TTemp = new TTemp(tname, tdetails, tdated, tdater, tprice);
            // let visitor: PriceVisitor = new PriceVisitor();
            // turkeytour.createTour(visitor);
            // turkeytour.accept(visitor);

            let turkeytour: Strat = new TStrat(tname, tdetails, tdated, tdater, tprice);
            turkeytour.show();
         }
         else {
            this.presentAlert("Тур не може бути менше 5 днів та більше 14")
         }
      }

   }

   ngOnInit() { }

   async presentAlert(message: string) {
      const alert = await this.alertController.create({
         header: 'Помилка',
         subHeader: '',
         message: message,
         buttons: ['OK'],
      });

      await alert.present();
   }
}


// @Component({
//    selector: 'app-myform',
//    templateUrl: './myform.component.html',
//    styleUrls: ['./myform.component.scss'],
// })
// export class MyformComponent implements OnInit {

//    courseForm!: FormGroup;
//    course!: Course;

//    semesterPattern = "[1-2]";
//    @Output() courseAdd: EventEmitter<Course> = new EventEmitter<Course>();
//    constructor(private fb: FormBuilder, private alertController: AlertController) {
//       this.courseForm = this.fb.group({
//          courseName: ['', [Validators.required]],
//          courseCredit: ['', [creditValidator()]],
//          Pib: ['', [Validators.required]],
//          Title: [''],
//          courseSemester: ['', [Validators.required, Validators.pattern(this.semesterPattern)]],
//          groups: new FormArray([new FormControl()]),
//       });
//    }

//    addGroup() {
//       console.log("Add");
//       (this.courseForm.controls['groups'] as FormArray).push(
//          new FormControl()
//       )
//    }

//    deleteGroup(i: any) {
//       console.log("Delete");
//       (this.courseForm.controls['groups'] as FormArray).removeAt(i)
//    }

//    getControls() {
//       return (this.courseForm.get('groups') as FormArray).controls;
//    }

//    onSubmit() {
//       let name = this.courseForm.value.courseName;
//       let c = this.courseForm.value.courseCredit;
//       let pib = this.courseForm.value.Pib;
//       let title = this.courseForm.value.Title;
//       let sem = this.courseForm.value.courseSemester;
//       let groups = this.courseForm.value.groups;
//       let valid = new ValidatorCredit();

//       if (valid.validate_credit(c)) {
//          this.course = new Course(name, c, pib, title, sem, groups);
//          console.log("Submit");
//          this.courseAdd.emit(this.course);
//       }
//       else {
//          this.presentAlert("Кредити за дисципліну мають бути в межах 10-20")
//       }

//    }

//    ngOnInit() { }

//    async presentAlert(message: string) {
//       const alert = await this.alertController.create({
//          header: 'Помилка',
//          subHeader: '',
//          message: message,
//          buttons: ['OK'],
//       });

//       await alert.present();
//    }
// }
