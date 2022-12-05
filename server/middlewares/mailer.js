const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
require('dotenv').config();

function main(method, {user, password}) {
  const token = jwt.sign({email: user.email}, process.env.TOKEN_KEY)
  let subject = ''
  let html =''
  if(method == 'register'){
    subject = 'Verify your email';
    html = `<div style='height: 150px; width: 100%;'>
              <h3>Hi dear ${user.username},</h3>
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
              <h3>Hi dear ${user.username}</h3>
              <p>
                <span>
                  welcome to <span style='font-weight: bold;'>LIVRAISON MARHABA</span>,
                  click <a href="http://localhost:${process.env.PORT}/api/auth/verify-forget-password/${token}">here</a> for reset your password.
                </span>
              </p>
            </div>`
  }
  if(method == 'addLivreur'){
    subject = ' Account created'
    html = `<div>
            <h3>Hello ${user.username}<h3>
            <p>Congratulation you just joined our deliver 
              <br>
              List you can find your password bellow
              <br>
              Your email: <strong>${user.email}</strong> 
            </p>
            <p>Passord:<strong>${password}</strong></p>
            <p>Click the button bellow to access to login page</p>
            <a href="#" style="background-color: #f59e0b; border: none;color: white;padding: 15px 32px; text-align: center; text-decoration: none;display: inline-block; font-size: 16px;">
            Log here
            </a>
            </div>
            `
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