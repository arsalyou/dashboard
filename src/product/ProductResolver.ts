import { ProductModel } from './ProductModel';
import { CustomerModel } from '../customer/CustomerModel';
import faker from 'faker';

const ProductResolvers = {
    Query: {
        async productquery(_, { }, context) {

            const res = await ProductModel.find();
            console.log(res);
            return res;

        },
    },
};

function generateProductsData() { 
    const productsData = [];
    let allCustomers = CustomerModel.find();
    for (let i = 0; i < 5; i++) { 
        productsData.push({
            price: faker.datatype.number({ min: 2010, max: 2022 }),
            category: faker.commerce.department(),
            name: faker.commerce.productName(),
        }); 
    }
    return productsData; 
}
    // Insert the data into MongoDB
//ProductModel.insertMany(generateProductsData());



export default ProductResolvers;
