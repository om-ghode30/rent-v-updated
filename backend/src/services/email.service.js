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