import axios from 'axios'
import {create} from 'zustand'

const coinDetails =create((set)=>({
    fetchCoinDetails :async(name) =>{
      const res= await axios.get(`http://localhost:9130/coins/${name}`)
       console.log(res.data)
    }
   
}))

export default coinDetails