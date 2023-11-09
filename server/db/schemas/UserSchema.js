const { Schema } = require("mongoose");

const userRole = ["customer", "admin"];

const UserSchema = new Schema(
  {
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
    password: {
      type: String,
      required: true,
    },
    addressInformation: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: userRole,
      default: "customer",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserSchema;
