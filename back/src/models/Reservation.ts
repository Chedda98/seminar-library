import mongoose from "mongoose"
import { IReservation } from "../interfaces/IReservation"

const ReservationSchema = new mongoose.Schema({
  _id:{
    type: mongoose.SchemaTypes.ObjectId,
  },
  roomType: {
    type: String,
    required: true,
  },
  roomNumber:{
    type: Number,
    require: true,
  },
  reservationNow:{
    type: Boolean,
    default: false,
  },
});

export default mongoose.model<IReservation & mongoose.Document>(
  "Reservation",
  ReservationSchema
);