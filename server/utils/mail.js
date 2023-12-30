const sgMail = require("@sendgrid/mail");
const { sendError } = require("./helper");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.generateOTP = (otp_length = 6) => {
  let OTP = "";
  for (let i = 1; i <= otp_length; i++) {
    const randomVal = Math.round(Math.random() * 9);
    OTP += randomVal;
  }

  return OTP;
};

exports.sendMail = async (to, subject, html) => {
  const msg = {
    to: to, // Change to your recipient
    from: "toannguyen.devjob@gmail.com", // Change to your verified sender
    subject: subject,
    html: html,
  };

  sgMail.send(msg).catch((error) => {
    console.log(error);
  });
};

exports.sendMailWithFile = async (to, subject, html, attachment) => {
  const msg = {
    to: to,
    from: "toannguyen.devjob@gmail.com",
    subject: subject,
    html: html,
    attachments: [
      {
        content: attachment,
        filename: "attachment.pdf",
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  };
  sgMail.send(msg).catch((error) => {
    console.log(error);
  });
};
