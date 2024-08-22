import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./db/index";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed", err);
    process.exit(1); 
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Server is live");
});
