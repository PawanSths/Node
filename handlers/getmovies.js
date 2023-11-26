const mongoose = require("mongoose");

const getmovies = async (req, res) => {
  const Moviesmodel = mongoose.model("movies");

  const movies = await Moviesmodel.find({});
  res.status(200).json({
    movies,
  });
};
module.exports = getmovies;
