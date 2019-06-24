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

var mailOptions = {
  from: 'wave.gao2013@gmail.com',
  to: 'jamie.wu2013@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

const sendEmail = () =>  {
  transporter.sendMail(mailOptions, function(error, info){
    console.log("send email");
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  sendEmail();
  res.send('post email');
});

module.exports = router;