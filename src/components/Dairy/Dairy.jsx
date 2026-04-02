import React from 'react'
import CategroyPage from '../CategoryPage/CategroyPage'
import BgFruits from '../../assets/dairy-and-eggs.png'


const Dairy = () => {
  return (
    <div>
        <CategroyPage 
        title="Dairy & Eggs" 
        bgImage={BgFruits} categories={['Dairy']}
      />
    </div>
  )
}

export default Dairy