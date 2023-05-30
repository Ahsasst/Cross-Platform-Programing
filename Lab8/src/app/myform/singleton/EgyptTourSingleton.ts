export class EgyptTourSingleton {
   name_tour: string = "";
   details_tour: string = "";
   date_departure: Date = new Date("12/12/1990");
   date_return: Date = new Date("12/12/1990");
   price_tour: number = 0;
   private constructor(name_tour: string, details_tour: string, date_departure: Date, date_return: Date, price_tour: number) {
      this.name_tour = name_tour;
      this.details_tour = details_tour;
      this.date_departure = date_departure;
      this.date_return = date_return;
      this.price_tour = price_tour;
   }
   private static egyptTourSingleton: EgyptTourSingleton;

   public static getEgyptTourSingleton(name_tour: string, details_tour: string, date_departure: Date, date_return: Date, price_tour: number): EgyptTourSingleton{
      
      if (!this.egyptTourSingleton) {
            this.egyptTourSingleton = new EgyptTourSingleton(name_tour, details_tour, date_departure, date_return, price_tour);
      }
      
      return this.egyptTourSingleton;
   }

   public show() {
      return "Єгипетські тури: \n" + "Назва туру: " + this.name_tour + " " + " Опис туру: " + this.details_tour
         + " " + "Дата відправлення: " + this.date_departure + " " + "Дата повернення: " + this.date_return
         + " " + "Ціна туру: " + this.price_tour;
   }
}