import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must be of at least 3 Characters."],
    maxLength: [30, "First name cannot exceed 30 Characters."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must be of at least 3 Characters."],
    maxLength: [30, "Last name cannot exceed 30 Characters."],
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  email: {
  type: String,
  required: true,
  validate: [val => validator.isEmail(val.trim()), "Provide a valid email"]
},

  phone: {
  type: String,
  required: true,
  trim: true,
  validate: {
    validator: function (val) {
      return /^\d{11}$/.test(val);  // Must be exactly 11 digits
    },
    message: "Phone number must contain 11 Digits."
  }
}
,
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
