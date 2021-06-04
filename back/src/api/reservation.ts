import express from "express";
import config from "../config";
import Reservation from "../models/Reservation";

const router = express.Router();

router.get("/reservation", async (req, res) => {
  try {
    const reservations = await Reservation.find();
    console.log(reservations)
    res.json(reservations);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;