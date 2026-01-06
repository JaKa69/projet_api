const mongoose = require("mongoose");


const merchantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    websiteUrl: { type: String, required: true },
    affiliateRate: { type: Number },
    conditions: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Merchant", merchantSchema);
