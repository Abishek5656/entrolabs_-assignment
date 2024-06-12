import mongoose, { Schema } from "mongoose";

const medicineSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true, 
   
    },
    manufacturer: {
      type: String,
      lowercase: true
    },
    skuType: {
      type: String,
    },
    skuId: {
      type: String,
      unique: true 
    },
    skuLabel: {
      type: String,
    },
    composition: {
      type: String,
    },
    quantity: {
      type: String,
    },
    price: {
      type: Number,
    }
  },
  {
    timestamps: true,
  }
);

export const Medicine = mongoose.model('Medicine', medicineSchema);
