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
              <h3>Hi dear ${user.username},</h3>
              <p>
                <div>
                  welcome to <span style='font-weight: bold;'>LIVRAISON MARHABA</span>,
                  Click the button bellow to Verify your email
                  <br>
                  <a href="http://localhost:${process.env.PORT}/api/auth/verify-email/${token}" style="background-color: #f59e0b; border: none; color: white; padding: 10px 15px; margin-top: 10px; border-radius: 6px; text-align: center; text-decoration: none;display: inline-block;">
                    Verify
                  </a>
                </div>
              </p>
            </div>`
  }
  if(method == 'forgotPassword'){
    subject = 'Forget password';
    html = `<div style='height: 150px; width: 100%;'>
              <h3>Hi dear ${user.username}</h3>
              <p>
                <div>
                  welcome to <span style='font-weight: bold;'>LIVRAISON MARHABA</span>,
                  Click the button bellow to reset your password
                  <br>
                  <a href="http://localhost:${process.env.PORT}/api/auth/verify-forgot-password/${token}" style="background-color: #f59e0b; border: none; color: white; padding: 10px 15px; margin-top: 10px; border-radius: 6px; text-align: center; text-decoration: none;display: inline-block;">
                    Log here
                  </a>
                </div>
              </p>
            </div>`
  }
  if(method == 'addLivreur'){
    subject = ' Account created'
    html = `<div>
            <h3>Hello ${user.username}<h3>
            <div>
              <div>Congratulation you just joined our deliver</div> 
              <div>List you can find your password bellow</div>
              <div>Your email: <strong>${user.email}</strong></div>
              <div>Passord:<strong>${user.password}</strong></div>
              <div>Click the button bellow to access to login page</div>
              <a href="#" style="background-color: #f59e0b; border: none;color: white;padding: 15px 32px; text-align: center; text-decoration: none;display: inline-block;">
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