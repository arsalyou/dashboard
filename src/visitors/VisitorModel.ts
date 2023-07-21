import { Schema, model } from 'mongoose';
import { IVisitorsSchema } from './VisitorDataType';

const VisitorsDataSchema = new Schema<IVisitorsSchema>({
    year: Number,
    totalVisitors: Number,
    totalLeadsGenerated: Number,
  
});



export const VisitorModel = model<IVisitorsSchema>('VisitorsData', VisitorsDataSchema);
