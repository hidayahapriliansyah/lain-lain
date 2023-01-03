const getIpInfo = async () => {
  try {
    const response = await fetch('https://ipinfo.io/?token=4022e207a7f899');

    const isJson = response.headers.get('content-type')?.includes('application/json');

    console.log(response.headers.get('content-type'));
  } catch (e) {

  }
}

// getIpInfo();

const headers = new Map();
headers.set('content-type', 'application/json');

const isJson = headers.get('content-type')?.includes('application/json');

const data = isJson ? true : false;

// console.log(data);

// test class

class CheckSalary {
  salary() {
    console.log('check salary');
  }
}

const user = {
  name: 'Hidayah',
  age: 21,
}

// const user = {
//   name: 'Hidayah',
//   age: 21,
//   write: new CheckSalary(),
// }

user.write?.salary();