const mongoose = require("mongoose");

const editmovies = async (req, res) => {
  const Moviesmodel = mongoose.model("movies");

  const { _id, name, info } = req.body;
  try {
    if (!_id) throw "Id is not given";
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "please use _id",
    });
    return;
  }
  try {
    await Moviesmodel.updateOne(
      {
        _id: _id,
      },
      {
        name: name,
        info: info,
      },
      {
        runValidators: true,
      }
    );
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      error: e.message,
    });
    return;
  }
  res.status(200).json({
    message: "You can edit your movies",
  });
};

module.exports = editmovies;
