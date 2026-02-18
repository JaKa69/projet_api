const mongoose = require("mongoose");


const priceSchema = new mongoose.Schema(
  {
    component: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Component",
      required: true
    },
    merchant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Merchant",
      required: true
    },
    price: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Price", priceSchema);
