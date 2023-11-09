const { Schema } = require("mongoose");

// const userRole = ['customer', 'admin'];

const ReviewSchema = new Schema(
  {
    memberEmail: {
      type: String,
      required: true,
    },
    businessId: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = ReviewSchema;
