import 'source-map-support/register'
import express from 'express';
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import {typeDefs} from './grapghql/typedefs'
import {resolvers} from './grapghql/resolvers';


import * as mongoose from 'mongoose';
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


const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });

interface MyContext {
    token?: string;
  }

async function startServer() {
    await connectDB();
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
