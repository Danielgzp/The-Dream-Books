const BASE_URL = 'http://localhost:3001/books';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi() {
  await simulateNetworkLatency();

  const url = BASE_URL;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

