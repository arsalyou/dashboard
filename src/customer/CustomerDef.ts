import { gql } from "apollo-server-express";
export const CustomerData = gql`
  # A type that describes user
 
  type CustomerData {
    id: String
    country: String
    age: Int
    occupation: String
    name: String
    gender: String
    productsBought: [String]

  }
 

  type Query {
    customerquery: [CustomerData]
  }
 
`;