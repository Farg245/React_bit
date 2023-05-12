import axios from 'axios'
import {create} from 'zustand'

const coinDetails =create((set)=>({
    coinData : [] ,
    data: [],
    fetchCoinDetails :async(name) =>{
      const dataRes= await axios.get(`http://localhost:9130/coins/${name}`)
       //console.log(dataRes)
       //const coinData= res.data
       set({ data: dataRes.data })
    }
   
}))

export default coinDetails