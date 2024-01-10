import express from "express";
import Event from "../models/event";

const router = express.Router();

router.get("/", async (_req, res) => {
  const events = await Event.findAll();
  res.json(events);
});

router.post("/", (_req, res) => {
  res.send("Saving an event!");
});

export default router;
