const express = require("express");
const router = express.Router();

const axios = require('axios');



// const fetchBitcoinMarketData = async () => {
//   try {
//     const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
//    console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchBitcoinMarketData();




router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
        // const data=response.data[100]
    //     const parsedData = {
    //     name: data.name,
    //     symbol: data.symbol,
    //     current_price: data.current_price,
    //     market_cap: data.market_cap,
    //     price_change_percentage_24h: data.price_change_percentage_24h,
    //   };
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving data from GeckoCoin API');
    }
  });
  



module.exports = router;