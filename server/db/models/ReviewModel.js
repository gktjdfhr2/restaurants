const mongoose = require("mongoose");
const { ReviewSchema } = require("../schemas");

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
