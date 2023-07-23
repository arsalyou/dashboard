import 'source-map-support/register'
import express from 'express';
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import {typeDefs} from './grapghql/typedefs'
import {resolvers} from './grapghql/resolvers';


import * as mongoose from 'mongoose';
//TODO - replace with env
const db: string = "mongodb+srv://arsalyou03:QMeWJNBFpJCQGEpt@cluster0.i3fobil.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB Connected... ");
  } catch (err) {
    console.error(err.message);
    // process.exit(1);
  }
};




interface MyContext {
    token?: string;
  }

async function startServer() {
    await connectDB();
    console.log(process.env.mongoURI);

    const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    introspection: true, // enables introspection of the schema
    });
    const { url } = await startStandaloneServer(server, { listen: { port: 4000 },
      });
      console.log(`🚀  Server ready at ${url}`);

    }
startServer();
