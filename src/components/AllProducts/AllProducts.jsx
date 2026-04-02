import React from 'react'
import CategroyPage from '../CategoryPage/CategroyPage'
import BgFruits from '../../assets/all-banner.jpg'

const AllProducts = () => {
  return (
    <div>
       <CategroyPage 
        title="All Product" 
        bgImage={BgFruits} categories={['All']}
      />
    </div>
  )
}

export default AllProducts