const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    maxcount: {
      type: Number,
      required: true,
    },
    phonenumber: {
      type: Number,
      reuired: true,
    },
    rentperday: {
      type: Number,
      reuired: true,
    },
    imageurl: [],
    currentbookings: [],
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      reuired: true,
    },
  },
  {
    timestamps: true,
  }
);
const roomModel = mongoose.model("rooms", roomSchema);

module.exports = roomModel;
