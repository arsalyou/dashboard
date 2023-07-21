import { Schema, model } from 'mongoose';
import { ISProductSchema } from './ProductDataType';

const ProductSchema = new Schema<ISProductSchema>({
    _id: Schema.Types.ObjectId,
    price: Number,
    name: String,
    category: String,
    customerIDs: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Customer' }],

});

export const ProductModel = model<ISProductSchema>('Product', ProductSchema);
