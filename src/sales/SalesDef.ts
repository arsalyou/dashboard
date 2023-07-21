import { gql } from "apollo-server-express";
export const SalesData = gql`
  # A type that describes user
 
  type SalesData {
    product: String,
    salesRevenue: Int,
    region: String
  }
 

  type Query {
    salesquery: [SalesData]
  }
 
`;
