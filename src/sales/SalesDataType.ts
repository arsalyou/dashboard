import { Document } from 'mongoose';
import { Types } from 'mongoose';


interface SaleStats {
    totalSales: number;
    totalUnits: number;
}

interface DailyData extends SaleStats{
    date: Date;
  }
  
  interface MonthlyData extends SaleStats{
    month: number;
  }

export interface ISalesSchema extends Document {
   
    year: number;
    yearlySalesTotal: number;
    yearlyTotalSoldUnits: number;
    dailyData: DailyData[];
    monthlyData: MonthlyData[];
    productID: Types.ObjectId,
    customerIDs: Types.ObjectId[];

  }
  