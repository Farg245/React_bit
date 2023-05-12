const express = require("express");
const router = express.Router();
const axios = require('axios');

//// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429
const cache = require('memory-cache');
const cacheKey = 'geckoCoinData3';
//// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429


router.get('/', async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

 
//// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
   // console.log('Using cached data...');
    return res.json(cachedData);
  }
  //// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429
    try {
       
        const searchItem = req.query.searchItem
        console.log(searchItem)
        const response = await axios.get(`https://api.coingecko.com/api/v3/search?query=${searchItem}`);
        // const data = response.data.slice(startIndex, endIndex);
        const parsedData = response.data.coins  
       
          //// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429
        cache.put(cacheKey, parsedData, 5 * 60 * 1000);
        //// this part is to be removed- it caches data  so we dont do too many requests on the geckopoint API and we get error 429
      
        const filteredData = parsedData.map(({ id, name, large }) => ({ id, name,large }));
        res.json(filteredData);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving data from GeckoCoin API');
    }
  });
  



module.exports = router;