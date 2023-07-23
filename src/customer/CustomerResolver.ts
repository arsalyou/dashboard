import { CustomerModel } from './CustomerModel';
import faker from 'faker';


const CustomerResolvers = {
    Query: {
        async customerquery(_, { }, context) {

            const res = await CustomerModel.find();
            //console.log(res);
            return res;
        },
    },
};
const names = ['Ali', 'Jao', 'Jack', 'John', 'Ch.']
function generateCustomersData() { 
    const customersData = [];
    for (let i = 0; i < 5; i++) { 
        customersData.push({
            country: faker.address.country(),
            age: faker.datatype.number({ min: 18, max: 70 }),
            occupation: faker.occupation,
            name: names[i],
            gender: 'M',

    }); }
    return customersData; 
}

// Insert the data into MongoDB
CustomerModel.insertMany(generateCustomersData());
export default CustomerResolvers;
