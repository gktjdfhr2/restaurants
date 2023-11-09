const { Schema } = require("mongoose");

// const userRole = ['customer', 'admin'];

const BusinessSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tagName: [String],
  amenities: [Number],
  placeX: {
    type: Number,
    required: true,
  },
  placeY: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  loadAddress: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  openTime: {
    type: String,
    required: true,
  },
  closedTime: {
    type: String,
    required: true,
  },
  breakStart: {
    type: String,
    required: true,
  },
  breakEnd: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: true,
  },
  menu: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      imageURL: { type: [String], required: true },
    },
  ],
  openState: {
    type: Boolean,
    default: false,
  },

  reservationState: {
    type: Boolean,
    default: false,
  },
  likes: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = BusinessSchema;
