import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import notesRouter from "./routes/notes.route.js";
const app = express();

dotenv.config();

//middleware
app.use(cors());
app.use(express.json());

app.use("/api/notes", notesRouter);

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(process.env.PORT, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
