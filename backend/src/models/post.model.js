import mongoose, { Schema } from "mongoose";
import { timeStamp } from "node:console";
import { describe } from "node:test";

const postSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      reqired: true,
      min: 1,
      max: 150,
    },
  },
  {
    timeStamps: true,
  },
);

export const Post = mongoose.model("Post", postSchema);