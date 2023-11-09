const mongoose = require("mongoose");
const { BusinessSchema } = require("../schemas");

const Business = mongoose.model("Business", BusinessSchema);

module.exports = Business;
