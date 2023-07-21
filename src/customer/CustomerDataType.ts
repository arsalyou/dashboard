import { Document } from 'mongoose';
export interface ICustomerSchema extends Document {
    _id: string;
    country: string;
    age: number;
    occupation: string;
    name: string;
    gender: string;
    productsBought: string[];



  }
  