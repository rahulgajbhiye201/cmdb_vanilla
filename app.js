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

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server has started successfully.");
});
