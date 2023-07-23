import { Schema, model } from 'mongoose';
import { ISalesSchema } from './SalesDataType';

// Define the Mongoose schema for SalesData
const salesStatsSchema = new Schema({
    totalSales: { type: Number, required: true },
    totalUnits: { type: Number, required: true },
  });
  
  // Define the Mongoose schema for DailyData
  const dailyDataSchema = new Schema({
    date: { type: Date, required: true },
    saleStats: salesStatsSchema
  });
  
  // Define the Mongoose schema for MonthlyData
  const monthlyDataSchema = new Schema({
    month: { type: Number, required: true },
    saleStats: salesStatsSchema
  });
  

const SalesDataSchema = new Schema<ISalesSchema>({


  _id: { type: Schema.Types.ObjectId},
  yearlySalesTotal: { type: Number},
  yearlyTotalSoldUnits: { type: Number},
  targetSales: { type: Number},
  year: { type: Number},
  dailyData: [dailyDataSchema],
  monthlyData: [monthlyDataSchema],
  productID: {
    type: Schema.Types.ObjectId, 
    ref: 'Product' 
  },
  customerIDs: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Customer' }],
});

export const SalesModel = model<ISalesSchema>('SalesData', SalesDataSchema);
