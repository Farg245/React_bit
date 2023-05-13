import axios from 'axios'
import {create} from 'zustand'



export const coinStore =create((set ,get)=>({
    coins: [],
    query :'' ,
    page :1 ,
    PAGE_SIZE :1000,
    
   
    fetchCoins :async()=>{
        const {page,PAGE_SIZE} = coinStore.getState();
        // console.log(page,PAGE_SIZE)
        const res= await axios.get(`http://localhost:9130/coins/markets?page=${page}&PAGE_SIZE=${PAGE_SIZE}`)
        //  console.log(res.length)
    set({coins: res.data})
    },
    setPage: (page) => set({ page }),
  setPageSize: (pageSize) => {
    set({ pageSize });
    get().fetchCoins();
  },
    
    
    // setPage: (page) => set({page}), // Update the page state
    // setPageSize: (pageSize) => set({pageSize}), // Update the pageSize state

  
})) 