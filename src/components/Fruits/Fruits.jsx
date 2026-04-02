import React from 'react'
import CategroyPage from '../CategoryPage/CategroyPage'
import BgFruits from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
  
      <CategroyPage 
        title="Fruits & Veggies" 
        bgImage={BgFruits} categories={['Fruits' , 'Vegetables']}
      />
  
      </div>
  )
}

export default Fruits