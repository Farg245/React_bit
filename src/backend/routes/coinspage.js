const express = require("express");
const router = express.Router();
const axios = require('axios');

//// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429
const cache = require('memory-cache');
const cacheKey = 'geckoCoinData2';
//// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429


router.get('/', async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

 
//// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429
  const cachedData = cache.get(cacheKey);
  if (cachedData&& cachedData!==[]) {
   
    return res.json(cachedData);
  }
  //// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429
    try {
        // const  page  = req.query.page;
        // const PAGE_SIZE = req.query.PAGE_SIZE
        // const pageNumber = parseInt(page, 10) || 1;
        // const startIndex = (pageNumber - 1) * PAGE_SIZE;
        // const endIndex = pageNumber * PAGE_SIZE;
        // console.log(page, PAGE_SIZE)
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en');
        // const data = response.data.slice(startIndex, endIndex);
        const data = response.data
        

        const parsedData = data.map(item => ({
            name: item.name,
            image :item.image ,
            symbol: item.symbol,
            id : item.id ,
            current_price: item.current_price,
            highest_price : item.high_24h,
            lowest_price : item.low_24h,
            price_change_percentage_24h: item.price_change_percentage_24h,
          }));
         
          //// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429
        cache.put(cacheKey, parsedData, 5 * 60 * 1000);
        //// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429
      res.json(parsedData)
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving data from GeckoCoin API');
    }
  });
  



module.exports = router;