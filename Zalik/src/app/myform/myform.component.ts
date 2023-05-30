import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Matrix } from './class/Matrix';
import { MatrixService } from './Service/matrix.service';
import { Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
   selector: 'app-myform',
   templateUrl: './myform.component.html',
   styleUrls: ['./myform.component.scss'],
})
export class MyformComponent implements OnInit {

   matrixForm!: FormGroup;
   matrix!: Matrix;

   @Output() matrixAdd: EventEmitter<Matrix> = new EventEmitter<Matrix>();
   constructor(private fb: FormBuilder, private alertController: AlertController, private matrixService: MatrixService) {
      this.matrixForm = this.fb.group({
         nSize: ['', [Validators.required, Validators.min(3), Validators.max(10)]],
      });
   }

   onSubmit() {
      let n = this.matrixForm.value.nSize;

      if (this.matrixForm.valid) {
         this.matrix = this.matrixService.generateMatrix(n);
         console.log('Submit');
         this.matrixAdd.emit(this.matrix);
      } else {
         this.presentAlert('Розмір матриці має бути в межах 3-10');
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
