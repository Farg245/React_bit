import React from 'react'
import coinStore from '../stores/coinStore'
import {Link} from 'react-router-dom'
export default function Home() {
  const store= coinStore()

  React.useEffect(()=>{store.fetchCoins()})
  return (
    <div>
      <input type ="text" value={store.query} onChange={store.setQuery}/>
        {store.coins.map(coin =>{
          return(
            <div key={coin.name}>
              <Link to={`/${coin.id}`}>
              {coin.name}
              </Link>
            </div>
            )
              
          
        })}

    </div>
  )
}
