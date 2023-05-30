import { TestBed } from "@angular/core/testing";
import { MatrixService } from "./matrix.service";
import { Matrix } from "../class/Matrix";

describe('MatrixService', () => {
   let service: MatrixService;

   beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(MatrixService);
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   });

   it('матриця має бути коректного розміру', () => {
      const n = 3;
      const matrix = service.generateMatrix(n);
      expect(matrix.N).toBe(n);
      expect(matrix.initialMatrix.length).toBe(n);
      expect(matrix.initialMatrix[0].length).toBe(n);
      expect(matrix.modifiedMatrix.length).toBe(n);
      expect(matrix.modifiedMatrix[0].length).toBe(n);
   });

   it('матриця має бути правильно заповнена', () => {
      const n = 3;
      const matrix = service.generateMatrix(n);
      const expectedMatrix = [
         [0, 0, 0],
         [0, 1, 2],
         [0, 2, 4]
      ];
      expect(matrix.initialMatrix).toEqual(expectedMatrix);
   });

   it('матриця має бути модифікована', () => {
      const matrix = new Matrix(3);
      matrix.initialMatrix = [
         [0, 0, 0],
         [0, 1, 2],
         [0, 2, 4]
      ];
      const modifiedMatrix = service.modifyMatrix(matrix.initialMatrix);
      const expectedModifiedMatrix = [
         [11, 11, 11],
         [11, 1, 2],
         [11, 2, 4]
      ];
      expect(modifiedMatrix).toEqual(expectedModifiedMatrix);
   });
});