import SaleResolvers from "../../sales/SalesResolver";
import ProductResolvers from "../../product/ProductResolver";
import CustomerResolvers from "../../customer/CustomerResolver";
import VisitorResolvers from "../../visitors/VisitorResolver";


export const resolvers = {
  Query: {
    ...SaleResolvers.Query,
    ...CustomerResolvers.Query,
     ...ProductResolvers.Query,
    ...VisitorResolvers.Query,
  },
 
};
