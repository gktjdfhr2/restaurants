const mongoose = require("mongoose");
const { LineSchema } = require("../schemas");

const Line = mongoose.model("Line", LineSchema);

module.exports = Line;
