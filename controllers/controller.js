const {User, Server} = require("./../models/model");
const sendMail = require("./../controllers/mailer");

exports.home = function (req, res) {
    res.render("logon");
};

exports.login = function (req, res) {
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
}

exports.domain = async (req, res) => {
    res.render("domains");
};

exports.domains = async (req, res) => {
    let searchtext = req.query.searches;
    let search = await Server.find({Name: { $regex: new RegExp(searchtext, "i") }}).exec();

    res.render("cilist", { listofCi: search });
};

exports.cilist = async (req, res) => {
    var diffDOM = req.query.adminBy;
    let serverListing = await Server.find({adminBy: { $regex: new RegExp(diffDOM, "i") }}).exec();
  
      res.render("cilist", { listofCi: serverListing });
};

exports.server = async (req, res) => {
    let serverLink = req.query.Name;
    let search = await Server.find({Name: { $regex: new RegExp(serverLink, "i") }}).exec();
    res.render("server", { serverDetails: search });
};

exports.servervalidation = async (req, res) => {
    const serverLink1 = req.query.Name;
    const search1 = await Server.find({Name: { $regex: new RegExp(serverLink1, "i") }}).exec();
    res.render("servervalidation", { serverDetails1: search1 });
};

exports.email = function (req, res) {
  
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
  }