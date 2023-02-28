import { v4 as uuidv4 } from 'uuid';

import User from '../models/User.js';
import Verification from '../models/Verification.js';

import nodemailerOption from '../service/email/nodemailerOption.js';
import transporter from '../service/app.js';

const signup_post = async (req, res) => {
  const {
    name,
    email,
  } = req.body;

  const payload = { name, email };

  const user = await User.create(payload);

  const uniqueString = uuidv4() + user._id;
  const verificationPayload = {
    user_id: user._id,
    unique_string: uniqueString,
    expired_at: new Date(Date.now() + 6 * 60 * 60 * 1000),
  };

  const verification = await Verification.create(verificationPayload);

  const emailOption = nodemailerOption({ destination: user.email, name: user.name, uniqueString });
  console.log(emailOption);
  await transporter.sendMail(emailOption);

  res.status(201).json({
    status: 'ok',
    message: 'User is created! Please check your email.',
    user: user._id,
    verification: verification._id,
  });
};

export {
  signup_post,
};

// import transporter from '../service/app.js'
// import nodemailerOption from '../service/email/nodemailerOption.js';

// const emailOption = nodemailerOption({
//   destination: 'adimuhamadfirmansyah@gmail.com',
//   name: 'Adi',
//   uniqueString: 'sjdfshdgy3485hsdyfb#*45hweh',
// });

// console.log(emailOption);

// transporter.sendMail(emailOption);