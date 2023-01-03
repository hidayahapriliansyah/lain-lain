import getIpInfo from './getIpInfo.js';

const getLatLon = async () => {
  try {
    const ipInfo = await getIpInfo();
    console.log(ipInfo);

    // if(!ipInfo.ok) {
    //   throw new Error('Terjadi kesalahan');
    // } else {   
    //   const lat = ipInfo.loc.split(',')[0];
    //   const lon = ipInfo.loc.split(',')[1];
    //   const { city: cityName } = ipInfo;
    //   const countryCode = ipInfo.country;
      
    //   console.log('latLon', lat, lon, countryCode, cityName);
      
    //   return { lat, lon, countryCode, cityName };
    // }
  } catch (err) {
    console.log(err.message);
    return err;
  }
};

getLatLon();

// export default getLatLon;