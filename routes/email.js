var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      user: 'wave.gao2013@gmail.com',
      pass: 'A359261788'
  }
});

var mailOptions = (bill) => ({
  from: 'wave.gao2013@gmail.com',
  to: 'jamie.wu2018@gmail.com',
  subject: `Bill is paid to ${bill.provider}`,
  text: `This is to confirm with you that $${bill.amount} was paid to ${bill.provider} for your ${bill.type} bill`
});

const sendEmail = (bill) =>  {
  const mailOption = mailOptions(bill);
  console.log(mailOption);
  transporter.sendMail(mailOption, function(error, info){
    console.log("send email");
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

/* GET users listing. */
router.post('/', function(req, res, next) {
  sendEmail(req.body);
  res.json({
    "message": "Email is sent successfully"
  });
});

module.exports = router;