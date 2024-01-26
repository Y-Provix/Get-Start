const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

async function db() {
  await mongoose.connect(process.env.db);
  console.log("Database is ready!");
}
db();

app.get('/', (req, res) => {
  res.render('index', { title: "My website", description: "Description", hrefIcon: "images/icon.png" })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
