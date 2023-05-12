import React from 'react'
import {coinStore} from '../stores/coinStore'
import {Link} from 'react-router-dom'
export default function Home() {
  const store= coinStore()

  React.useEffect(()=>{store.fetchCoins()},[store.page, store.pageSize])
  const totalPages = Math.ceil(store.coins.length / store.pageSize);
  return (
    <div>
      <div>
        Page Size:
        <button onClick={() => store.setPageSize(10)}>10</button>
        <button onClick={() => store.setPageSize(20)}>20</button>
        <button onClick={() => store.setPageSize(50)}>50</button>
      </div>


      <div>
        <button onClick={() => store.setPage(store.page - 1)} disabled={store.page === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button key={i} onClick={() => store.setPage(i + 1)} disabled={store.page === i + 1}>
            {i + 1}
          </button>
        ))}
        <button onClick={() => store.setPage(store.page + 1)} disabled={store.page === totalPages}>
          Next
        </button>
      </div>

      {store.coins.slice((store.page - 1) * store.pageSize, store.page * store.pageSize).map((coin) => (
        <div key={coin.name}>
          <Link to={`/${coin.id}`}>{coin.name}</Link>
        </div>
      ))}
    </div>
  );
}