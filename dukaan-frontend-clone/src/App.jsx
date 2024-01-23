import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { SearchCard } from './components/SearchCard'

function App() {
  
  return (
    <>
    <SearchCard/>
    <div className='grid grid-cols-3 gap-2 pt-6'>
      <RevenueCard  title="Amount Pending" amount="92,312.20" orderCount={13} />
      <RevenueCard  title="Amount Pending" amount="92,312.20" orderCount={13} />
      <RevenueCard  title="Amount Processed" amount="23,92,312.19"/>
    </div>
    </>
  )
}

export default App
