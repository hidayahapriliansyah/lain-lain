import dotenv from 'dotenv';
import transporter from './transporter.js';

dotenv.config();

const option = {
  from: process.env.AUTH_EMAIL,
  to: 'adimuhamadfirmansyah@gmail.com',
  subject: 'Hello World 2',
  html: '<h1>Hello this is testing 2</h1>',
};

transporter.sendMail(option);
