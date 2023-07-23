import { Document, Schema } from 'mongoose';
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
    targetSales: number;
    dailyData: DailyData[];
    monthlyData: MonthlyData[];
    productID: Schema.Types.Mixed,
    customerIDs: Types.ObjectId[];

  }
  