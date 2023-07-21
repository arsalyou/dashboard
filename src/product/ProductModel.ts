import { Schema, model } from 'mongoose';
import { ISProductSchema } from './ProductDataType';

const ProductSchema = new Schema<ISProductSchema>({

    price: Number,
    category: String,
    customerIDs: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Customer' }],

});

export const ProductModel = model<ISProductSchema>('Product', ProductSchema);
