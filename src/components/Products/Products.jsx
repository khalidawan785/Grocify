import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'

const Products = () => {

    const categories = ['All', 'Fruits', 'Vetetables', 'Dairy', 'SeaFood']
    const [activeTabs, setActiveTabs] = useState('All');

    let filteredItems = activeTabs === 'All'
    ? ProductList : ProductList.filter(item=>item.category === activeTabs);

    const rendenCards = filteredItems.slice(0,8).map(product => {
        return (
            <Cards image={product.image} name={product.name} price={product.price} />
        )
    })

    return (
        <section>
            <div className='md:max-w-[1400px] max-w-[95%] mx-auto py-20'>
                <Heading highlight="Our" heading="Products" />

                {/* Tabs */}
                <div className='flex flex-wrap gap-3 justify-center mt-10'>
                    {categories.map(category => {
                        return (
                            <button key={category}
                                className={` px-5 py-2 text-lg rounded-lg cursor-pointer ${activeTabs === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`}
                                onClick={() => setActiveTabs(category)}>
                                {category}
                            </button>
                        )
                    })}
                </div >
                {/* Product Listing */}
                <div className='grid md:grid-cols-4 grid-cols-1 gap-9 mt-10'>
                    {rendenCards}
                </div>
                <div className='items-center mx-auto w-fit mt-15'>
                    <Button content="View All"/>
                </div>
            </div>
        </section>
    )
}

export default Products


