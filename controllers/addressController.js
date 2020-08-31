const axios = require('axios');

const getAddressDetails = async (req, res, next) => {
  const address = req.body.address;
  const addressUrl = encodeURIComponent(address);

  const geoRes = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${addressUrl}&key=${process.env.API_KEY}`
  );

  //   console.log(geoRes.data.results);

  const addressComponents = geoRes.data.results[0].address_components;
  const location = geoRes.data.results[0].geometry.location;
  //   console.log(location);
  //   console.log(addressComponents);

  const locationDetails = {
    street: addressComponents[0].long_name,
    city: addressComponents[2].long_name,
    state: addressComponents[3].long_name,
    country: addressComponents[4].long_name,
    lat: location.lat,
    lng: location.lng,
  };

  res.status(200).json({
    status: 'success',
    data: locationDetails,
  });
};

module.exports = { getAddressDetails };
