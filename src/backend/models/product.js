import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product is required"],
    unique: true
  },
  description: {
    type: String,
    required: [true, "a description is required for a product"],
  },
  price: {
    type: Number,
    required: [true, "a price is required for a product"],
  },
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "a Category is required for a product"],
    enum: {
      values: [
        "Electronics",
        "cameras",
        "Laptops",
        "Accessories",
        "Headphones",
        "Sports",
      ],
      message: "please select correct category",
    },
  },
  seller: {
    type: String,
    required: [true, "please enter a seller"],
  },
  stock: {
    type: Number,
    required: [true, "please enter a stock"],
    default: 0,
  },

  reviews: [
    {
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: false,
  },
  ratings: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
