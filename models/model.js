const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rahul:12345@cluster0.wwsmh.mongodb.net/cmDB");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Database connected successfully");
});

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

const User = mongoose.model("User", userSchema);
const Server = mongoose.model("Server", serverSchema);

module.exports = {User, Server};