const nodemailer = require("nodemailer");
const mailConfig = require("../config/mailConfig");

exports.sendEmail = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport(mailConfig);

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contato do seu site: ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\nMensagem:\n${message}`,
  };

  await transporter.sendMail(mailOptions);
};
