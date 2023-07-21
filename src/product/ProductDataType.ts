import { Document } from 'mongoose';
export interface ISProductSchema extends Document {
    _id: string;
    price: number;
    name: string;
    category: string;
    customerIDs: string[];



  }
  