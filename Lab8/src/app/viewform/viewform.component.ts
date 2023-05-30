import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Tour } from '../myform/class/Tour';
import { TourType } from '../myform/class/TourType';
import { TourFactory} from '../myform/class/TourFactory';
import { EgyptTourFactory } from '../myform/class/EgyptTourFactory';
import { TurkeyTourFactory } from '../myform/class/TurkeyTourFactory';
import { EgyptTour } from '../myform/class/EgyptTour';
import { TurkeyTour } from '../myform/class/TurkeyTour';
import { Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
   selector: 'app-viewform',
   templateUrl: './viewform.component.html',
   styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent implements OnInit {

   tourForm!: FormGroup;
   show_update: boolean = false;
   tours: TourFactory[] = [];
   constructor() { }
   ngOnInit() { }
   addTour(event: any) {
      if (event as TourFactory) {
         let tour: TourFactory = event;
         this.tours.push(tour);
         console.log(this.tours);
      } else {
         throw new Error("Error of type");
      }
   }
   update() { this.show_update = true; }
   showUp(event: any) {
      if (typeof event === "boolean") { this.show_update = event; }
      else
         throw new Error("Error of type");
   }
   update_save(event: any, i: number) {
      if (event as TourFactory) {
         this.tours[i] = event;
      }
      else
         throw new Error("Error of type");
   }

   deleteTour(i: number) {
      this.tours.splice(i, 1);
   }
}

// import { Component, OnInit, Input } from '@angular/core';
// import { Course } from '../myform/class/Course';
// import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
// import { AlertController } from '@ionic/angular';

// @Component({
//    selector: 'app-viewform',
//    templateUrl: './viewform.component.html',
//    styleUrls: ['./viewform.component.scss'],
// })
// export class ViewformComponent implements OnInit {

//    courseForm!: FormGroup;
//    show_update: boolean = false;
//    courses: Course[] = [];
//    constructor() { }
//    ngOnInit() { }
//    addCourse(event: any) {
//       if (event as Course) {
//          let course: Course = event;
//          this.courses.push(course);
//          console.log(this.courses);
//       } else {
//          throw new Error("Error of type");
//       }
//    }
//    update() { this.show_update = true; }
//    showUp(event: any) {
//       if (typeof event === "boolean") { this.show_update = event; }
//       else
//          throw new Error("Error of type");
//    }
//    update_save(event: any, i: number) {
//       if (event as Course) {
//          this.courses[i] = event;
//       }
//       else
//          throw new Error("Error of type");
//    }

//    deleteCourse(i: number) {
//       this.courses.splice(i, 1);
//    }
// }
