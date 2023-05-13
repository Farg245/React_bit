import React from 'react';
import { Link } from 'react-router-dom';

export default function Coinlist({ coins, pageSize, page }) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  return (
    <div className="HomePageCoinlist">
      {coins.slice(startIndex, endIndex).map((coin) => (
        <div key={coin.id} className="coin-cell">
          <Link to={`/${coin.id}`}>
            <span className="CoinList-image"><img src={coin.image} alt={coin.name}/></span> 
            <span className="HomePageCoinList">{coin.name}</span>
            <div className="coin-details">
              <span className="coin-detail">Current price: {coin.current_price} USD</span>
              <span className="coin-detail">24h High: {coin.high_24h} USD</span>
              <span className="coin-detail">24h Low: {coin.low_24h} USD</span>
              <span className="coin-detail">24h Price Change: {coin.price_change_percentage_24h}%</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}