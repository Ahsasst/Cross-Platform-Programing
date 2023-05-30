import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../myform/class/Course';
import { ValidatorCredit } from '../myform/Service/ValidatorCredit.service';
import { Tour } from '../myform/class/Tour';
import { TourType } from '../myform/class/TourType';
import { TourFactory } from '../myform/class/TourFactory';
import { EgyptTourFactory } from '../myform/class/EgyptTourFactory';
import { TurkeyTourFactory } from '../myform/class/TurkeyTourFactory';
import { EgyptTour } from '../myform/class/EgyptTour';
import { TurkeyTour } from '../myform/class/TurkeyTour';
import { Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ValidatorDayDateService } from '../myform/Service/ValidatorDayDateService';

@Component({
   selector: 'app-updateform',
   templateUrl: './updateform.component.html',
   styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent implements OnInit {

   @Input() tour!: TourFactory;
   @Input() show: boolean = true;
   @Output() tourChange: EventEmitter<TourFactory> = new EventEmitter<TourFactory>();
   @Output() showChange = new EventEmitter();
   constructor() { }
   
   save(type: any, n: any, d: any, tdd: any, tdr: any, p: any) {
      let valid = new ValidatorDayDateService();
      if (type === 'Egypt') {
         this.show = false;
         if (valid.validate_diff_date(tdd, tdr)) {
            this.tour = new EgyptTourFactory(TourType.EGYPT, n, d, tdd, tdr, p);
            this.tourChange.emit(this.tour);
            this.showChange.emit(this.show);
         } else {
            throw Error("Тур не може бути менше 5 днів та більше 14")
         }
      } else {
         this.show = false;
         if (valid.validate_diff_date(tdd, tdr)) {
            this.tour = new TurkeyTourFactory(TourType.TURKEY, n, d, tdd, tdr, p);
            this.tourChange.emit(this.tour);
            this.showChange.emit(this.show);
         } else {
            throw Error("Тур не може бути менше 5 днів та більше 14")
         }
      }
   }


   ngOnInit() { }

}

// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Course } from '../myform/class/Course';
// import { ValidatorCredit } from '../myform/Service/ValidatorCredit.service';
// import { Validators } from '@angular/forms';

// @Component({
//    selector: 'app-updateform',
//    templateUrl: './updateform.component.html',
//    styleUrls: ['./updateform.component.scss'],
// })
// export class UpdateformComponent implements OnInit {

//    @Input() course!: Course;
//    @Input() show: boolean = true;
//    @Output() courseChange: EventEmitter<Course> = new EventEmitter<Course>();
//    @Output() showChange = new EventEmitter();
//    constructor() { }
//    validate_credit(c: number): boolean {
//       let validator = new ValidatorCredit();
//       if (c)
//          if (!validator.validate_credit(c)) return false; else return true;
//       else return true;
//    }
//    semesterPattern = "[1-2]";
//    save(n: any, cr: any, P: any, t: any, s: any) {
//       this.show = false;
//       if (this.validate_credit(cr)) {
//          if (!RegExp(this.semesterPattern).test(s))
//             throw Error("Semester is wrong")
//       }
//       else throw Error("Credit is wrong");
//       this.course = new Course(n, cr, P, t, s, this.course.groups);
//       this.courseChange.emit(this.course);
//       this.showChange.emit(this.show);
//    }


//    ngOnInit() { }

// }
