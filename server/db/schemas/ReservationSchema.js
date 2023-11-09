const { Schema } = require("mongoose");

const ReservationSchema = new Schema({
  reservationUserId: {
    type: Schema.Types.ObjectId,
    ref: "userId",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  lineState: {
    type: Number,
    required: true,
  },
  personalAdult: {
    type: Number,
    required: true,
  },
  personalKid: {
    type: Number,
    required: true,
  },
});

module.exports = ReservationSchema;
