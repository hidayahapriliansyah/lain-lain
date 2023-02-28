import transporter from './app.js';
import nodemailerOption from './email/nodemailerOption.js';

const emailOption = nodemailerOption({
  destination: 'adimuhamadfirmansyah@gmail.com',
  name: 'Adi',
  uniqueString: 'sjdfshdgy3485hsdyfb#*45hweh',
});

console.log(emailOption);

transporter.sendMail(emailOption);
// berhasil