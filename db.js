const mongoose = require("mongoose");
const { db } = require("./models/pizzaModel");

var mongoURL = "mongodb+srv://AnkitLall:ankitlall1000@cluster0.xkrphhq.mongodb.net/?retryWrites=true&w=majority";

const uri = "mongodb://localhost:27017/assign8";
mongoose.connect(uri, (err) => {
  if (err) throw err;
  console.log("connected...");
});

module.exports = db;
