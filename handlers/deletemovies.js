const mongoose = require("mongoose");

const deletemovies = async (req, res) => {
  const Moviesmodel = mongoose.model("movies");

  const { _id } = req.query;
  try {
    if (!_id) throw "Provide _id to delete";
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e,
    });
    return;
  }
  await Moviesmodel.deleteOne({ _id: _id });
  res.status(200).json({
    message: "You can delete your movies",
  });
};

module.exports = deletemovies;
