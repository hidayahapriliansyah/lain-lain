import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

import nodemailerOption from './email/nodemailerOption.js';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PW_APP,
  },
});

transporter.verify((error, success) => {
  if (error){
    console.log(error);
  } else {
    console.log('Ready to send email');
    console.log(success);
  }
});

// const emailOption = nodemailerOption({
//   destination: 'adimuhamadfirmansyah@gmail.com',
//   name: 'Adi',
//   uniqueString: 'sjdfshdgy3485hsdyfb#*45hweh',
// });

// transporter.sendMail(emailOption);

export default transporter;
