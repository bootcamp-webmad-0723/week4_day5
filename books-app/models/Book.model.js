const { Schema, model } = require('mongoose');

const bookSchema = new Schema(
  {
    title: String,
    description: String,
    author: {
      name: String,
      birth: String,
      image: String
    },
    rating: Number
  },
  {
    timestamps: true
  }
);

module.exports = model('Book', bookSchema)