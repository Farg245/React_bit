const express = require("express");
const router = express.Router();



const axios = require('axios');



const fetchBitcoinMarketData = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

fetchBitcoinMarketData();




router.get('/', async (req,res,next )=>
res.send('helldo')) 



module.exports = router;