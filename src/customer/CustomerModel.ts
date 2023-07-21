import { Schema, model } from 'mongoose';
import { ICustomerSchema } from './CustomerDataType';

const CustomerSchema = new Schema<ICustomerSchema>({

    country: String,
    age: Number,
    occupation: String,
    name: String,
    gender: String,
    productsBought: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Product' }],

});

export const CustomerModel = model<ICustomerSchema>('Customer', CustomerSchema);
