import { Document } from 'mongoose';
export interface ISalesSchema extends Document {
    product: string;
    salesRevenue: number;
    region: string;
  }
  