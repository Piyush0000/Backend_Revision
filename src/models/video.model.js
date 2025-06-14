import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudinary url
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, 
      required: true,
    },
    views:{
      type: Number,
      default: 0, // Default value for views
    },
    isPublished:{
      type: Boolean,
      default: false, // Default value for isPublished
    },
    owner:{
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
    }
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);


videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
