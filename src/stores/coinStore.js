import axios from 'axios'
import {create} from 'zustand'

const coinStore =create((set)=>({
    coins: [],
    query :'' ,
    setQuery:(e)=>{
        set({query : e.target.value}) 
        coinStore.getState().searchQuery()},
    
    
    
    searchQuery:async() =>{const {query} =coinStore.getState()
    console.log(query)
    const res =await axios.get(`http://localhost:9130/coins/${query}`)
    console.log(res)
    },


    fetchCoins :async()=>{
        const res= await axios.get('http://localhost:9130/coins/markets?page=3&PAGE_SIZE=20')
    //console.log(res.data)
    set({coins: res.data})
    }
}))

export default coinStore