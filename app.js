const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const indexHandler = require("./handlers/indexHandler");
const getmovies = require("./handlers/getmovies");
const createmovies = require("./handlers/createmovies");
const editmovies = require("./handlers/editmovies");
const deletemovies = require("./handlers/deletemovies");

const app = express();
require("./models/movies.model");

app.use(express.json());

const mongo_connect = process.env.mongo_connect;

mongoose
  .connect(mongo_connect, {})
  .then(() => {
    console.log("Connection was sucessful");
  })
  .catch((err) => {
    console.log("Error found!");
  });

app.get("/", indexHandler);

app.get("/movies", getmovies);

app.post("/movies", createmovies);

app.patch("/movies", editmovies);

app.delete("/movies", deletemovies);

app.listen(8000, () => {
  console.log("server started");
});
