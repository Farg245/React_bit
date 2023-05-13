import React from 'react'
import coinDetails from '../stores/coinDetails'
import {Link} from 'react-router-dom'
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
    
       <img src={details.data.image} alt={details.data?.name} />
      <header>
      <h2>{details.data.name}({details.data.symbol})</h2>
      </header>


      <h4>Current Price</h4>
      <span>${details.data?.current_price_usd}</span>
      <h4>Price Change 24h</h4>
      <span>{details.data?.priceChange24h}%</span>
      <h4>Price Change 7d</h4>
      <span>{details.data?.priceChange7d}%</span>
      <h4>Price Change 14d</h4>
      <span>{details.data?.priceChange14d}%</span>
      <h4>Price Change 30d</h4>
      <span>{details.data?.priceChange30d}%</span>
      <h4>Price Change 60d</h4>
      <span>{details.data?.priceChange60d}%</span>
      <h4>Price Change 200d</h4>
      <span>{details.data?.priceChange200d}%</span>
      <h4>Price Change 1y</h4>
      <span>{details.data?.priceChange1y}%</span>
      <h4>24h High</h4>
      <span>${details.data?.high_24h}</span>
      <h4>24h Low</h4>
      <span>${details.data?.low_24h}</span>
      <h4>Description</h4>
      <p>{details.data?.description}</p>
            </div>
          )
        }
