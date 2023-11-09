const mongoose = require("mongoose");
const { ReservationSchema } = require("../schemas");

const Reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = Reservation;
