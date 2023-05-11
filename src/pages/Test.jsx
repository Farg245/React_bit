import React from 'react'
import coinDetails from '../stores/coinDetails'

import{useParams} from 'react-router-dom'

export default function Test() {
    const details= coinDetails()
    const params =useParams()
    
    React.useEffect(()=>{
        console.log(params)
        details.fetchCoinDetails(params.name)
    })
  return (
    <div>Test</div>
  )
}
