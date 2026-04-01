import React from 'react'
import Heading from '../Heading/Heading'
import fruitsCat from '../../assets/fruits-and-veggies.png'
import fruitsCat2 from '../../assets/meat-and-seafood.png'
import fruitsCat3 from '../../assets/dairy-and-eggs.png'
import Button from '../Button/Button'

const Category = () => {
    const renderCards = category.map(card => {
        return (
            // yu code card ki listing hai dyanim design bnta hai
            // Card
            <div className='flex-1 basis-[300px]' key={card.id}>
                {/* Category Card  image*/}
                <div className='w-full md:min-h-[20vh] min-h-[20vh] relative -mb-10 mt-10'>
                    <img src={card.image} alt="" className='absolute bottom-0'/>
                </div>

                {/* card content */}

                <div className='bg-zinc-100 px-12 py-10 rounded-xl'>
                    <h3 className='text-zine-800 text-3xl font-bold'>
                        {card.title}
                    </h3>
                    <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
                    <Button content="See All"/>
                    
                </div>
            </div>
        )
    })
    return (
        // yi code card k design show krna k lia hai
        <section>
            <div className='py-20 md:max-w-[1400px] max-w-[95%] mx-auto'>
                <Heading highlight="Shop" heading="by Category" />

                {/* Category Card */}
                <div className='flex flex-wrap md:gap-10 gap-10 md:mt-15 mt-0'>
                    {renderCards}
                </div>

            </div>
        </section>
    )
}

export default Category


// yi array bnie hai jb card m dynamic data show krna ho
const category = [
    {
        id: 1,
        title: 'Frutis & Veggies',
        description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
        image: fruitsCat
    },
    {
        id: 2,
        title: 'Dairy & Eggs',
        description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
        image: fruitsCat2
    },
    {
        id: 3,
        title: 'Meat & SeaFood',
        description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
        image: fruitsCat3
    },
]