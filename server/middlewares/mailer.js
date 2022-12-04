const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
require('dotenv').config();

function main(method, user) {
  const token = jwt.sign({email: user.email}, process.env.TOKEN_KEY)
  let subject = ''
  let html =''
  if(method == 'register'){
    subject = 'Verify your email';
    html = `<div style='height: 150px; width: 100%;'>
              <h3>Hy dear,</h3>
              <p>
                <span>
                  welcome to <span style='font-weight: bold;'>LIVRAISON MARHABA</span>,
                  click <a href="http://localhost:${process.env.PORT}/api/auth/verify-email/${token}">here</a> for active your account.
                </span>
              </p>
            </div>`
  }
  if(method == 'forgetPassword'){
    subject = 'Forget password';
    html = `<div style='height: 150px; width: 100%;'>
              <h3>Hy dear,</h3>
              <p>
                <span>
                  welcome to <span style='font-weight: bold;'>LIVRAISON MARHABA</span>,
                  click <a href="http://localhost:${process.env.PORT}/api/auth/verify-forget-password/${token}">here</a> for reset your password.
                </span>
              </p>
            </div>`
  }
 
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let info ={
    from: `"LIVRAISON MARHABA👻" <${process.env.EMAIL}>`,
    to: user.email,
    subject: subject,
    html: html
  };

  transporter.sendMail(info);

  console.log("Message sent");
}

module.exports = {
  main
}