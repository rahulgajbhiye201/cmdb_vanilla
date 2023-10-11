const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//       user: 
//       pass: 
//   }
// });
  
const sendMail = (Title,
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
  OperatingSystem) => {

  const ejs = require("ejs");

  ejs.renderFile(__dirname + "./../views/mailtemplate.ejs", {
    Titlep:Title,
    namep:Name,
    InstallStatusp:InstallStatus,
    Categoryp:Category,
    SupportGroupp:SupportGroup,
    SystemRolep:SystemRole,
    IPAddressp:IPAddress,
    Locationp:Location,
    AdministratorByp:HostedOnILOIP,
    HostedOnp:RebootSlot,
    OperatingSystemp:AdministratorBy,
    RebootSlotp:OperatingSystem},
  function (err, data) {
    if (err) {
        console.log(err);
    } else {
        const mailOptions = {
        from: 'rihangajbhiye@gmail.com',
        to: 'rahulgajbhiye201@gmail.com',
        subject: Title,
        html: data
        };

        transporter.sendMail(mailOptions, function(err, data){
          if(err){
            console.log("unable to fetch data")
          } else {
            console.log("Data send", data);
          }
        });
      }
  });

}

module.exports = sendMail;