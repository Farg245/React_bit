
import {Link} from 'react-router-dom'
import React from "react"
import { AiOutlineLeft } from 'react-icons/ai';
export default function Header({back}) {
  // console.log(back)
  return (
    <header className="header">
        <div className="width">
        
        <h1>
        {back && (
                    <Link to="/">
                      <AiOutlineLeft size={24}  />
                    </Link>
           )}
            <Link to ="/">Coingecko</Link>

       </h1>
       
    </div>
</header>
  )
}
