import {VisitorModel} from './VisitorModel';
import faker from 'faker';


const VisitorResolvers = {
    Query: {
        async visitorquery(_, { }, context) {
            try{
            const res = await VisitorModel.find().limit(100);
            //console.log(res);
            return res;
            }catch (exec) {
                console.error(exec.toString());
                throw new Error(exec.toString());
            }

        },
    },


};

function generateVisitorsData() { 
    const visitorsData = [];
    for (let i = 0; i < 100; i++) { 
        visitorsData.push({
        year: faker.datatype.number({ min: 2010, max: 2022 }),
        totalVisitors: faker.datatype.number({ min: 50, max: 500 }),
        totalLeadsGenerated: faker.datatype.number({ min: 2, max: 50 })
    }); }
    return visitorsData; 
}
    // Insert the data into MongoDB
//VisitorModel.insertMany(generateVisitorsData());



export default VisitorResolvers;
