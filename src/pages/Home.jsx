import React from 'react'
import {coinStore} from '../stores/coinStore'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import '../style.scss'; // Import the CSS file
import Coinlist from '../components/Coinlist';
import PaginationButtons from '../components/PaginationButtons';
export default function Home() {
  const store= coinStore()

  React.useEffect(()=>{store.fetchCoins()})
  const totalPages = Math.ceil(store.coins.length / store.pageSize);
 
  return (
    <div class="button">
       <Header/>
       <PaginationButtons
        totalPages={Math.ceil(store.coins.length / store.pageSize)}
        currentPage={store.page}
        onPageChange={(page) => store.setPage(page)}
        pageSizeOptions={[10, 20, 50]}
        onPageSizeChange={(pageSize) => store.setPageSize(pageSize)}
      />

       <div className="HomePageCoinList">
        
        <div className="width">
        <h2>Market List</h2>
        
     <Coinlist coins={store.coins} pageSize={store.pageSize} page={store.page} />
     </div>
     
     </div>
    </div>
  );
}