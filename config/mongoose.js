// importing mongoose
const mongoose = require("mongoose");
// connecting mongoose to mongoDB atlas server and ecommerce Database
mongoose.connect(
  "mongodb+srv://gauravprof2998:V8m0kQXdTWVEsIHO@cluster0.x6mutts.mongodb.net/",
  {
    useNewUrlParser: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error in connecting to DB"));
db.once("open", function () {
  console.log("Connected to DB Successfully");
});
module.exports = db;
