const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const address = document.querySelector('#address').value;
  console.log(address);

  const details = await axios.post('http://localhost:5000/api/getAddress', {
    address: address,
  });

  console.log(details);

  const HTML = `
  Street: ${details.data.data.street} <br>
  City: ${details.data.data.city} <br>
  Country: ${details.data.data.country} <br>
  State: ${details.data.data.state} <br>
  Latitude: ${details.data.data.lat} <br>
  Longitude: ${details.data.data.lng} <br>
  `;
  document.querySelector('#results').innerHTML = HTML;
});
