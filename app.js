const express = require("express");
const bodyParser = require("body-parser");
const  mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const domainrouters = require("./routes/domainrouter");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(domainrouters);
app.use(express.json());


app.listen(3000, function () {
  console.log("Server is running on 3000 port.");
});
