const express = require("express");
const bodyParser = require("body-parser");
const domainrouters = require("./routes/domainrouter");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(domainrouters);

mongoose.connect(process.env.MONGODB_URI).then(() => {
  const PORT = process.env.PORT || 8000
  app.listen(PORT, () => {
      console.log(`App is Listening on PORT ${PORT}`);
  })
}).catch(err => {
  console.log(err);
});
