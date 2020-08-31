const axios = require('axios');

const getAddressDetails = async (req, res, next) => {
  const address = req.body.address;
  const addressUrl = encodeURIComponent(address);

  const geoRes = await axios.get(
    `https://nominatim.openstreetmap.org/search/?q=${addressUrl}&format=json&addressdetails=1`
  );

  const addressComponents = geoRes.data[0].address;
  const location = geoRes.data[0];

  const locationDetails = {
    street: addressComponents.road,
    city: addressComponents.city,
    state: addressComponents.state,
    country: addressComponents.country,
    lat: location.lat,
    lng: location.lon,
  };

  res.status(200).json({
    status: 'success',
    data: locationDetails,
  });
};

module.exports = { getAddressDetails };
