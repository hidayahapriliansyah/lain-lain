import dotenv from 'dotenv';

dotenv.config();

const nodemailerOption = ({ destination, name, uniqueString }) => ({
  from: process.env.AUTH_EMAIL,
  to: destination,
  subject: 'Email verification from signup',
  html: `
    <h1>Testing again 2. Hello ${name}</h1>
    <p>Ini adalah link verifikasi akun mu: http://localhost:3009/verify/${uniqueString}</p>
  `,
});

export default nodemailerOption;