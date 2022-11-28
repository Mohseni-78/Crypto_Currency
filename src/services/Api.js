import axios from "axios";

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
//https://api.coingecko.com/api/v3/coins/ethereum
// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h

const getAllCrypto = async (currency) => {
  const crypto = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );
  return crypto.data;
};

const getDetailCrypto = async (id) => {
  const crypto = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );
  return crypto.data;
};

const getHistoricalChart = async (id, days = 365, currency) => {
  const crypto = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
  );
  return crypto.data.prices;
};

const getTrendingCrypto = async (currency) => {
  const crypto = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
  );
  return crypto.data;
};

export { getAllCrypto, getDetailCrypto, getHistoricalChart, getTrendingCrypto };
