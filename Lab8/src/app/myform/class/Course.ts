export class Course {
   name: string = "";
   credit: number = 0;
   PIB_teacher: string = "";
   title_teacher: string = "";
   semester: number = 1;
   groups: string[] = [];
   constructor(name: string, credit: number, Pib: string, title: string, semester: number, groups: string[]) {
      this.name = name;
      this.credit = credit;
      this.PIB_teacher = Pib;
      this.title_teacher = title;
      this.semester = semester;
      this.groups = groups;
   }
}