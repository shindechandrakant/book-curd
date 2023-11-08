const uri = process.env.MONGO_DB_URL;
import mongoose from "mongoose";

try {
  await mongoose.connect(uri);
  console.log("DB Connected Successfully...!");
} catch (err) {
  console.log("Something went wrong while connecting mongo DB");
  console.log(`Error: ${err.message}`);
}

export { mongoose as client };
