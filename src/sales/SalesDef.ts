import { gql } from "apollo-server-express";
export const SalesData = gql`
  # A type that describes user

  # Define the SalesData type
type SaleStats {
  totalSales: Float
  totalUnits: Int
}

# Define the DailyData type
type DailyData {
  date: String
  saleStats: SaleStats

}

# Define the MonthlyData type
type MonthlyData {
  month: Int
  saleStats: SaleStats
}

type productData {
    _id: String
    price: Int
    name: String
    category: String
    customerIDs: [String]
}

type customerData {
    country: String
    age: Int 
    name: String
    gender: String
}



# Define the ProductData type
type SalesData {
  _id: ID!
  yearlySalesTotal: Float
  yearlyTotalSoldUnits: Int
  year: Int
  targetSales: Int
  dailyData: [DailyData]
  monthlyData: [MonthlyData]
  productID: productData
  customerIDs: [customerData]
}
 
 

  type Query {
    salesquery: [SalesData]
  }
 
`;
