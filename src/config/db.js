import * as mongoose from 'mongoose';
let   db = "mongodb+srv://arsalyou03:QMeWJNBFpJCQGEpt@cluster0.i3fobil.mongodb.net/?retryWrites=true&w=majority";

export const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log("MongoDB Connected... ");
  } catch (err) {
    console.error(err.message);
    // process.exit(1);
  }
};

