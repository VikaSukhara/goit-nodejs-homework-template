import nodemailer from "nodemailer";
import "dotenv/config";

const { UKR_NET_MAIL, UKR_NET_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_MAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendMail = (data) => {
  const mail = { ...data, from: UKR_NET_MAIL };
  return transport.sendMail(mail);
};

export default sendMail;
