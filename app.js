const express = require ("express")
const app = express()
const hbs = require("hbs")



app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
  });
  app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/views/about.html");
  });
  app.get("/works", (request, response) => {
    response.sendFile(__dirname + "/views/works.html");
  });

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
  })
