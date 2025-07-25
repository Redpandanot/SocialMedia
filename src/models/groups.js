const mongoose = require("mongoose");

const groupSchema = mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    groupName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    groupInfo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 200,
    },
    moderators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    memberCount: {
      type: Number,
      required: true,
      default: 1,
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const groupModel = mongoose.model("Groups", groupSchema);

module.exports = groupModel;
