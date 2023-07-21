import {SalesModel} from './SalesModel';
import config from "config";


const SaleResolvers = {
    Query: {
        async salesquery(_, { }, context) {



            const res = await SalesModel.find();
            console.log(res);

            return res;

        },
    },


};

export default SaleResolvers;
