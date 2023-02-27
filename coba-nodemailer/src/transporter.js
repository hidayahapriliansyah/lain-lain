import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PW_APP,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log('Verify Error', error);
  } else {
    console.log('Ready to send mail');
    console.log(success);
  }
});

export default transporter;