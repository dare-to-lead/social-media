import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
import userRoutes from "./routes/user.routes.js";

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URL).then(() => console.log("connected to database"));

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
