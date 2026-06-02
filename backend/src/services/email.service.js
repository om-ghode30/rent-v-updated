/*
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({

  host: process.env.BREVO_SMTP_HOST,

  port: process.env.BREVO_SMTP_PORT,

  secure: false,

  auth: {
    user: process.env.BREVO_SMTP_LOGIN,
    pass: process.env.BREVO_SMTP_PASSWORD
  }

});

exports.sendOTPEmail = async (email, otp) => {

  try {

    const info = await transporter.sendMail({

      from: `"Rent Vehicle" <${process.env.BREVO_SMTP_LOGIN}>`,

      to: email,

      subject: "Your OTP Code",

      html: `
        <h2>Your OTP is: ${otp}</h2>
        <p>Valid for 5 minutes.</p>
      `

    });

    console.log("MAIL SENT:", info.messageId);

    return true;

  } catch (error) {

    console.log("MAIL ERROR:", error);

    throw new Error("Failed to send OTP email");

  }

};

*/









const axios = require("axios");

exports.sendOTPEmail = async (email, otp) => {

  try {

    const response = await axios.post(
      "http://localhost/mail/send_mail.php",
      {
        email,
        subject: "Your OTP Code",
        message: `
          <h2>Your OTP is: ${otp}</h2>
          <p>Valid for 5 minutes.</p>
        `
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Mail API Response:", response.data);

    return response.data;

  } catch (error) {

    console.log(
      "Mail Service Error:",
      error.response?.data || error.message
    );

    throw new Error("Failed to send OTP email");
  }
};