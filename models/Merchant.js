import mongoose from "mongoose";

const merchantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    websiteUrl: { type: String, required: true },
    affiliateRate: { type: Number },
    conditions: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Merchant", merchantSchema);
