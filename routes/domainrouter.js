const Router = require("express");
const router = Router();
const mongoose = require("mongoose");
const sendMail = require("../mail");

mongoose.connect("mongodb+srv://rahul:12345@cluster0.wwsmh.mongodb.net/cmDB");


const userSchema = {
  alid: String,
  password: String
}

const serverSchema = {
  Name: String,
  installStatus: String,
  category: String,
  supportGroup: String,
  systemRole: String,
  ipAddress: String,
  location: String,
  adminBy: String,
  iloIp: String,
  hostedOn: String,
  operatingSystem: String,
  rebootSlot: String 
}

const User = new mongoose.model("User", userSchema);
const Server = mongoose.model("Server", serverSchema);

router.get("/", function (req, res) {
  res.render("login");
});

router.get("/domain", async (req, res) => {
  res.render("domains");
});

router.get("/domains", async (req, res) => {
    let searchtext = req.query.searches;
    let search = await Server.find({Name: { $regex: new RegExp(searchtext, "i") }}).exec();

    res.render("cilist", { listofCi: search });
});

router.get("/cilist", async (req, res) => {
  var diffDOM = req.query.adminBy;
  let serverListing = await Server.find({adminBy: { $regex: new RegExp(diffDOM, "i") }}).exec();

    res.render("cilist", { listofCi: serverListing });
});

router.get("/server", async (req, res) => {
  let serverLink = req.query.Name;
  let search = await Server.find({Name: { $regex: new RegExp(serverLink, "i") }}).exec();
  res.render("server", { serverDetails: search });
});


router.get('/servervalidation', async (req, res) => {
  const serverLink1 = req.query.Name;
  const search1 = await Server.find({Name: { $regex: new RegExp(serverLink1, "i") }}).exec();
  res.render("servervalidation", { serverDetails1: search1 });
});

router.post("/", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // Logon part
  User.findOne({ alid: username }, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          res.render("domains");
        }
      }
    }
  });
  // Logon part
});

router.post("/email", function (req, res) {
  
  const {
    Title,
    Name,
    InstallStatus,
    Category,
    SupportGroup,
    SystemRole,
    IPAddress,
    Location,
    HostedOnILOIP,
    RebootSlot,
    AdministratorBy,
    OperatingSystem } = req.body;

  sendMail(
    Title,
    Name,
    InstallStatus,
    Category,
    SupportGroup,
    SystemRole,
    IPAddress,
    Location,
    HostedOnILOIP,
    RebootSlot,
    AdministratorBy,
    OperatingSystem , function(err, data){
    if(err){
      res.status(500).json({message: "Internal Error"})
    }else{
      res.json({message: "Email Send"});
    }
  });
});

module.exports = router;
