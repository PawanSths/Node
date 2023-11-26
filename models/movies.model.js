const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "The name must contain 3 characters"],
  },
  info: {
    type: String,
    required: [true, "Info is required"],
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
    required: [true, "Name is required"],

    validate: {
      validator: (value) => {
        if (value < 0 || value > 10) {
          return false;
        }
      },
      message: "Rating must be between 0 to 10",
    },
  },
});
const moviemodel = mongoose.model("movies", movieSchema);

module.exports = moviemodel;
