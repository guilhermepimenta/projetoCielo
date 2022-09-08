export class Sumary  { 
    totalQuantity: number;
    totalAmount: number;
    totalNetAmount: number;
    totalAverageAmount: number; 
    initialDate: Date;
    finalDate: Date;

    public constructor (totalQuantity: number, totalAmount: number, totalNetAmount: number, totalAverageAmount: number, initialDate: Date, finalDate: Date) 
        {   this.totalQuantity = totalQuantity;
            this.totalAmount = totalAmount;
            this.totalNetAmount = totalNetAmount;
            this.totalAverageAmount = totalAverageAmount;
            this.initialDate = initialDate;
            this.finalDate = finalDate;
        }
}