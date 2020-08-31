const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const address = document.querySelector('#address').value;
  console.log(address);
  const details = await axios.post('http://localhost:5000/api/getAddress', {
    address: address,
  });
  console.log(details);
});
