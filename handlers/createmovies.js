const mongoose = require("mongoose");

const createmovies = async (req, res) => {
  const Moviesmodel = mongoose.model("movies");

  const { name, info, image, rating } = req.body;
  // try {
  //   if (!name) {
  //     throw "Name is required";
  //   }
  //   if (rating < 0 || rating > 10) {
  //     throw "The rating must be between 1 to 10";
  //   }
  // } catch (e) {
  //   res.status(400).json({
  //     status: "failed",
  //     message: e,
  //   });
  //   return;
  // }
  let createdMovie;
  try {
    createdMovie = await Moviesmodel.create({
      name: name,
      info: info,
      image: image,
      rating: rating,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: error.message,
    });
    return;
  }

  res.status(200).json({
    message: "You can add your movies",
    createdMovie: createdMovie,
  });
};

module.exports = createmovies;
