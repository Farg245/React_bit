import React from 'react';
import { Link } from 'react-router-dom';

export default function Coinlist({ coins, pageSize, page }) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  return (
    <div className="home-cryptos">
    <div className="home-crypto">
     
      {coins.slice(startIndex, endIndex).map((coin) => (
        
        <div key={coin.id} >
          <Link to={`/${coin.id}`}>
          <div className="widthCoinList ">

            <span className="home-crypto-image"><img src={coin.image} alt={coin.name}/></span> 
            <div className="home-crypto-info ">
            <span className="home-crypto-name">{coin.name}</span>
            <span className="home-crypto-symbol">({coin.symbol})</span>
            </div>
            </div>
            <div className="widthCoinList ">
              <span className="home-crypto-price">Price: {coin.current_price}USD </span>
              </div>
              
              <span className="home-crypto-prices">24h High: {coin.highest_price}USD </span>
              <span className="home-crypto-prices">24h Low: {coin.lowest_price}USD </span>
              <span
                className={`home-crypto-price-change ${
                  coin.price_change_percentage_24h >= 0 ? 'green' : 'red'
                }`}
              >
                Price Change: {coin.price_change_percentage_24h}%
              </span>
           
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}