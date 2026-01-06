import mongoose from "mongoose";

const componentSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },
    brand: { type: String, required: true },
    title: { type: String, required: true },
    model: { type: String },
    description: { type: String },
    specifications: { type: Object },
    image: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Component", componentSchema);
