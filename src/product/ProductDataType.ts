import { Document } from 'mongoose';
export interface ISProductSchema extends Document {
    _id: string;
    price: number;
    category: string;
    customerIDs: string[];



  }
  