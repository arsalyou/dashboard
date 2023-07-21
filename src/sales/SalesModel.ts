import { Schema, model } from 'mongoose';
import { ISalesSchema } from './SalesDataType';

const SalesDataSchema = new Schema<ISalesSchema>({
    product: String,
    salesRevenue: Number,
    region: String
});

export const SalesModel = model<ISalesSchema>('SalesData', SalesDataSchema);
