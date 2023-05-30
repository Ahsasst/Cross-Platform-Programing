import { Injectable } from '@angular/core';
import { Matrix } from '../class/Matrix';

@Injectable({
   providedIn: 'root'
})
export class MatrixService {
   constructor() { }

   generateMatrix(n: number): Matrix {
      const matrix = new Matrix(n);
      matrix.initialMatrix = this.fillMatrix(n);
      matrix.modifiedMatrix = this.modifyMatrix(matrix.initialMatrix);
      return matrix;
   }

   fillMatrix(n: number): number[][] {
      const matrix: number[][] = [];
      for (let i = 0; i < n; i++) {
         matrix[i] = [];
         for (let j = 0; j < n; j++) {
            matrix[i][j] = i * j;
         }
      }
      return matrix;
   }

   modifyMatrix(matrix: number[][]): number[][] {
      const modifiedMatrix: number[][] = [];
      for (let i = 0; i < matrix.length; i++) {
         modifiedMatrix[i] = [];
         for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] % 3 === 0 && matrix[i][j] % 7 === 0) {
               modifiedMatrix[i][j] = 11;
            } else if (matrix[i][j] % 3 === 0) {
               modifiedMatrix[i][j] = 43;
            } else if (matrix[i][j] % 7 === 0) {
               modifiedMatrix[i][j] = 47;
            } else {
               modifiedMatrix[i][j] = matrix[i][j];
            }
         }
      }
      return modifiedMatrix;
   }
}