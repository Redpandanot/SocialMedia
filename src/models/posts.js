const mongoose = require("mongoose");
const validator = require("validator");

const postsSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 75,
    },
    description: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 1500,
    },
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Groups",
    },
    photos: [
      {
        url: {
          type: String,
          validate(value) {
            if (!validator.isURL(value)) {
              throw new Error("Invalid URL");
            }
          },
        },
        public_id: {
          type: String,
        },
      },
    ],
    likeCount: {
      type: Number,
      required: true,
      default: 0,
    },
    commentCount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

postsSchema.index({ userId: 1, groupId: 1 });

const postsModel = mongoose.model("Posts", postsSchema);

module.exports = postsModel;
