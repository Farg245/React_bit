import React from 'react'
import coinDetails from '../stores/coinDetails'

import{useParams} from 'react-router-dom'
import Header from '../components/Header'
export default function Test() {
    const details= coinDetails()
    const params =useParams()
    
    React.useEffect(()=>{
        //  console.log(params)
        details.fetchCoinDetails(params.name)
        // console.log(details.data.image)
    })
    if (!details.data) {
      // Render a loading indicator while the data is being fetched
      return <div>Loading...</div>;
    }
    return (
      
    <div>
      <Header back />
      <header className="test-header">
        
       <img src={details.data.image} alt={details.data?.name} />
       <h2>
          {details.data?.name}
          <span className="symbol">({details.data?.symbol})</span>
      </h2>
      </header>
      <div className="width">
      <div className="CoinDetails">
  <h2>Coin Details</h2>
  <div className="details-row">
    <h3>Current Price</h3>
    <span>${details.data?.current_price_usd}</span>
  </div>
  <div className="details-row">
    <h3>Price Change 24h</h3>
    <span>{details.data?.priceChange24h}%</span>
  </div>
  <div className="details-row">
    <h3>Price Change 7d</h3>
    <span>{details.data?.priceChange7d}%</span>
  </div>
  <div className="details-row">
    <h3>Price Change 14d</h3>
    <span>{details.data?.priceChange14d}%</span>
  </div>
  <div className="details-row">
    <h3>Price Change 30d</h3>
    <span>{details.data?.priceChange30d}%</span>
  </div>
  <div className="details-row">
    <h3>Price Change 60d</h3>
    <span>{details.data?.priceChange60d}%</span>
  </div>
  <div className="details-row">
    <h3>Price Change 200d</h3>
    <span>{details.data?.priceChange200d}%</span>
  </div>
  <div className="details-row">
    <h3>Price Change 1y</h3>
    <span>{details.data?.priceChange1y}%</span>
  </div>
  <div className="details-row">
    <h3>24h High</h3>
    <span>${details.data?.high_24h}</span>
  </div>
  <div className="details-row">
    <h3>24h Low</h3>
    <span>${details.data?.low_24h}</span>
  </div>
  </div>
  </div>
  <div className="width">
  <div className="description-section">
      <h3>Description</h3>
      <div dangerouslySetInnerHTML={{ __html: details.data?.description }}></div>
    </div>
            </div>
            </div>
          )
        }
