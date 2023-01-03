const https = require('https');

const url = 'https://www.boredapicom/api/activity';

https.get(url, res => {
  console.log('status : ', res.statusCode);
  console.log('header : ', res.headers);

  // let body = [];
  // res.on('data', chunk => {
  //   body.push(chunk);
  // });
  
  // res.on('end', () =>{
  //   body = Buffer.concat(body).toString();
  //   console.log(body);
  // });

  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    data = JSON.parse(data);
    console.log(data);
  });
}).on('error', err => {
  console.log(err);
});;