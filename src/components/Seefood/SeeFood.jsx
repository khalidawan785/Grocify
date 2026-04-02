import React from 'react'
import CategroyPage from '../CategoryPage/CategroyPage'
import BgFruits from '../../assets/seafood-banner.jpg'


const SeeFood = () => {
  return (
    <div>
       <CategroyPage 
        title="Meet & SeeFood" 
        bgImage={BgFruits} categories={['SeaFood']}
      />
    </div>
  )
}

export default SeeFood