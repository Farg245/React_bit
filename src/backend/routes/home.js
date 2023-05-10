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
        const  page  = req.query.page;
        const PAGE_SIZE = req.query.PAGE_SIZE
        const pageNumber = parseInt(page, 10) || 1;
        const startIndex = (pageNumber - 1) * PAGE_SIZE;
        const endIndex = pageNumber * PAGE_SIZE;

        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
        const data = response.data.slice(startIndex, endIndex);
        // const data=response.data
        const parsedData = data.map(item => ({
            name: item.name,
            symbol: item.symbol,
            current_price: item.current_price,
            highest_price : item.high_24h,
            lowest_price : item.low_24h,
            price_change_24h: item.price_change_24h,
          }));
      res.json(parsedData)
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving data from GeckoCoin API');
    }
  });
  



module.exports = router;