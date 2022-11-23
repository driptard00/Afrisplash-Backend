const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  _author: {
    ref: "post",
    required: true
  },

  _content: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "content"
  },

  title: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  },

  categories: {
    type: String,
    required: true
  },

  tags: {
    type: Array,
    default: []
  },

  summary: {
    type: String,
    required: true
  },

  read_time: {
    type: Number,
    required: true
  },

  cover_image: {
    type: String,
    required: true
  },

  thumbnail: {
    type: String,
    required: true
  },

  views: {
    type: Number,
    required: true
  },

  disable_comments: {
    type: Boolean,
    required: true,
    default: false
  },
},
{
  timestamps: true
}
);

module.exports = mongoose.model("post", postSchema);