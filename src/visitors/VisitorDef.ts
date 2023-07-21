import { gql } from "apollo-server-express";
export const VisitorData = gql`
  # A type that describes user
 
  type VisitorsData {
    year: Int
    totalVisitors: Int
    totalLeadsGenerated: Int
  }
 

  type Query {
    visitorquery: [VisitorsData]
  }
 
`;
