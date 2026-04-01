import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
    return (
        <section className='bg-zinc-100 md:bg-right bg-bottom bg-contain bg-no-repeat' style={{ backgroundImage: `url(${FreshFruits})` }}>
            <div className='md:bg-transparent bg-zinc-100 py-10 flex flex-col md:flex-row md:max-w-[1400px] max-w-[100%] mx-auto px-3 py-10' >
                <span className='md:text-9xl text-5xl font-bold text-orange-500 transform md:-rotate-90 h-fit md:self-center '>20%</span>
                <div className='max-w-[700px]'>
                    <h3 className='md:text-7xl text-4xl text-zinc-900 font-bold'>
                        First Order Discount!
                    </h3>
                    <p className='text-zinc-900 my-6'>
                        Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.
                    </p>
                    <Button content="Get A Discount" />
                </div>
            </div>
        </section>
    )
}

export default Discount