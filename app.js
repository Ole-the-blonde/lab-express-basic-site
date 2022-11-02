const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("main", {
    title: "Main page",
    style: ["main.css"],
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "concerts",
    style: ["about.css", "font-style.css"],
  });
});
app.get("/layout", (req, res) => {
  res.render("layout");
});
app.get("/music", (req, res) => {
  res.render("music");
});
app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
