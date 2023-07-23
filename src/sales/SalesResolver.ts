import {SalesModel} from './SalesModel';
import { CustomerModel } from '../customer/CustomerModel';
import { ProductModel } from '../product/ProductModel';
import faker from 'faker';

async function generatesalesData() { 
    const years = [2020, 2021, 2022]
    const salesData = [];
    const allCustomers = await CustomerModel.find();
    const allProducts = await ProductModel.find();
    for (let i = 0; i < 3; i++) { 
        //monthly data
        const monthlyData = [], dailyData = [], customerIDs = [];
        for (let i = 1; i < 12; i++) { 
            monthlyData.push({
                month: i, 
                saleStats: {
                    totalSales: faker.datatype.number({ min: 100, max: 400 }), 
                    totalUnits: faker.datatype.number({ min: 10, max: 40 }) 
                }
            })
        }
        for (let i = 1; i < 20; i++) { 
            dailyData.push({
                date: i, 
                saleStats: {
                    totalSales: faker.datatype.number({ min: 100, max: 400 }), 
                    totalUnits: faker.datatype.number({ min: 10, max: 40 }) 
                }
            })
        }
        // for now inserting 5 customer ids
        // allCustomers.forEach(customer => {
            
        //     customerIDs.push(customer._id);
        // })
        for(let i = 0 ; i < 5; i++){
            customerIDs.push(allCustomers[i]._id);
        }
        console.log(years[i]);
        salesData.push({
            yearlySalesTotal: faker.datatype.number({ min: 10000, max: 40000 }),
            yearlyTotalSoldUnits:  faker.datatype.number({ min: 100, max: 400 }),
            targetSales: faker.datatype.number({ min: 200, max: 500 }),
            year: years[i],
            dailyData,
            monthlyData,
            productID: allProducts && allProducts[Math.floor(Math.random() * allProducts?.length)],
            customerIDs: customerIDs,

        }); 
    }
    return salesData; 
}
   
const SaleResolvers = {
    Query: {
        
        async salesquery(_, { }, context) {
            // const options = { strictPopulate: false };
            try{

            const res = await SalesModel.find().populate('productID').populate('customerIDs');
            //console.log(JSON.stringify(res));
            // if(!res?.length){
            //     const salesData = await generatesalesData();
            //     return SalesModel.insertMany(salesData);
            // }
            //console.log(res);

            return res;
            }catch(exec){
               console.error(exec.toString());
            }
        },
    },
};


export default SaleResolvers;
