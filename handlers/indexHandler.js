const indexHandler = (req, res) => {
  res.status(200).json({
    data: "good",
  });
};

module.exports = indexHandler;
