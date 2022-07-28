import express from "express";
import eventRouter from "./routes/events";
import { PORT } from "./util/config";
import connectToDatabase from "./util/db";

const app = express();
app.use(express.json());

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/events", eventRouter);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

void start();
