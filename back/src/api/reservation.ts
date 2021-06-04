import express from "express";
import config from "../config";
import Reservation from "../models/Reservation";

const router = express.Router();

router.get("/studio", async (req, res) => {
  try {
    const reservations = await Reservation.find({
      roomType: "Studio"
    });
    res.json(reservations);

    if (!reservations) {
      return res.status(400).json({ msg: "Null value" });
    }

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.get("/seminar", async (req, res) => {
  try {
    const reservations = await Reservation.find({
      roomType: "Seminar"
    });
    res.json(reservations);

    if (!reservations) {
      return res.status(400).json({ msg: "Null value" });
    }
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;