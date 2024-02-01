import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;
console.log(MONGO_URL);
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URL).then(() => console.log("connected to database"));

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
