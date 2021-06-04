import mongoose from "mongoose";

export interface IReservation {
  _id: mongoose.Types.ObjectId;
  roomType: string;
  roomNumber: Number;
  reservationNow: [boolean];
}