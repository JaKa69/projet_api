const mongoose = require("mongoose");


const configurationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    name: { type: String, required: true },
    components: [
      {
        component: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Component"
        },
        price: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Price"
        }
      }
    ],
    totalPrice: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Configuration", configurationSchema);
