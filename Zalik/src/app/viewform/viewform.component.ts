import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Matrix } from '../myform/class/Matrix';

@Component({
   selector: 'app-viewform',
   templateUrl: './viewform.component.html',
   styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent implements OnInit {

   matrixForm!: FormGroup;
   show_update: boolean = false;
   matrixes: Matrix[] = [];
   constructor() { }
   ngOnInit() { }
   addMatrix(event: any) {
      if (event as Matrix) {
         let matrix: Matrix = event;
         this.matrixes.push(matrix);
         console.log(this.matrixes);
      } else {
         throw new Error("Error of type");
      }
   }
   getBackgroundColor(matrix: Matrix, rowIndex: number, colIndex: number): string {
      const cellValue = matrix.modifiedMatrix[rowIndex][colIndex];
      if (cellValue === 11) {
         return 'red'; // Замінені числа, що кратні 3 і 7
      } else if (cellValue === 43) {
         return 'blue'; // Замінені числа, що кратні 3
      } else if (cellValue === 47) {
         return 'green'; // Замінені числа, що кратні 7
      }
      return 'transparent';
   }

   deleteMatrix(i: number) {
      this.matrixes.splice(i, 1);
   }
}
