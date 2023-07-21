import { Document } from 'mongoose';
export interface IVisitorsSchema extends Document {
    year: number;
    totalVisitors: number;
    totalLeadsGenerated: number;
  }
  