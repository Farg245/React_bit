const express = require("express");
const router = express.Router();
const axios = require('axios');

//// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429
const cache = require('memory-cache');
const cacheKey = 'geckoCoinData';
//// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429



router.get('/:id', async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  //// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429
  const cachedData = cache.get(cacheKey);
  if (cachedData&& cachedData!==[]) {
    // console.log('Using cached data...');
     return res.json(cachedData);
   }
  //// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429
    try {
      const id=req.params.id
      // console.log(id) 
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        const data =response.data
        const parsedData = {
          name :data.name ,
          image : data.image.large ,
          symbol : data.symbol ,
          current_price_usd : data.market_data.current_price.usd ,
          priceChange1h: data.market_data.price_change_percentage_1h_in_currency.usd,
          priceChange24h: data.market_data.price_change_percentage_24h_in_currency.usd,
          priceChange7d: data.market_data.price_change_percentage_7d_in_currency.usd ,
          priceChange14d: data.market_data.price_change_percentage_14d_in_currency.usd ,
          priceChange30d: data.market_data.price_change_percentage_30d_in_currency.usd ,
          priceChange60d: data.market_data.price_change_percentage_60d_in_currency.usd ,
          priceChange200d: data.market_data.price_change_percentage_200d_in_currency.usd ,
          priceChange1y: data.market_data.price_change_percentage_1y_in_currency.usd ,
          high_24h: data.market_data.high_24h.usd ,
          low_24h: data.market_data.low_24h.usd ,
          description : data.description.en 
        }

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