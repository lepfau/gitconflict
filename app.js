const express = require ("express")
const app = express()
const hbs = require("hbs")

app.use (express.static(__dirname + "/public"));

app.set("views", __dirname +"/views");
app.set("view engine", "hbs");

app.get("/", (request, response) => {
    response.render("index");
  });

  app.get("/about", (request, response) => {
    response.render("about");
  });
  app.get("/works", (request, response) => {
    response.render("works");
  });

app.listen(4000, () => {
    console.log(`Example app listening at http://localhost:4000`)
  })
