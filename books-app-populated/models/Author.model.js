const { Schema, model } = require('mongoose');

const authorSchema = new Schema(
  {
    name: String,
    lastName: String,
    nationality: String,
    birth: String,
    pictureUrl: String,
  },
  {
    timestamps: true
  }
);

module.exports = model('Author', authorSchema)