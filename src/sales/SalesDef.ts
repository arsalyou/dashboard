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

# Define the ProductData type
type SalesData {
  _id: ID!
  yearlySalesTotal: Float
  yearlyTotalSoldUnits: Int
  year: Int
  dailyData: [DailyData]
  monthlyData: [MonthlyData]
  productID: ID
  customerIDs: [ID]
}
 
 

  type Query {
    salesquery: [SalesData]
  }
 
`;
