// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import Heading from '../Heading/Heading';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import { IoStarSharp } from "react-icons/io5";

const Testimonials = () => {
  return (
    <section>
      <div className='max-w-[1400px] mx-auto py-20'>
        <Heading highlight="Customers" heading="Saying" />
        <div className='flex justify-end gap-x-2 mb-10'>
          <button className='custom-prev text-3xl text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center'>
            <IoIosArrowBack />
          </button>
          <button className='custom-next text-3xl text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center'>
            <IoIosArrowForward />
          </button>
        </div>
        <Swiper navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]} className="mySwiper">
          {
            review.map(item => {
              return (
                <SwiperSlide key={item.id} className='bg-zinc-100 rounded-xl p-8'>
                  <div className='flex gap-5 items-center'>
                    <div className='flex justify-center items-center w-16 h-16 rounded-full outline-2 outline-orange-500 outline-offset-4'>
                      <img className='rounded-full w-full h-full overflow-hidden' src={item.image} alt="" />
                    </div>
                    <div className=''>
                      <h5 className='text-xl font-bold'>
                        {item.name}
                      </h5>
                      <p className='text-zinc-600'>
                        {item.profession}
                      </p>
                      <span className='flex text-orange-500'>
                        {Array.from({ length: item.rating }, (_, index) => (
                          <IoStarSharp key={index} />
                        ))
                        }
                      </span>
                    </div>
                  </div>
                  <div className='mt-10 min-h-[10vh]'>
                    <p className='text-zinc-600'>{item.para}</p>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}
export default Testimonials


const review = [
  {
    id: 1,
    name: 'Emily Johnson',
    profession: 'Food Blogger',
    rating: 3,
    para: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!',
    image: Customer1,
  },
  {
    id: 2,
    name: 'Alya Zahra',
    profession: 'Model',
    rating: 4,
    para: 'Shopping online with FreshBasket has saved me so much time. I trust them for my family weekly groceries—always fresh, affordable, and reliable.',
    image: Customer2,
  },
  {
    id: 3,
    name: 'Carlos Mendes',
    profession: 'Fitness Coach',
    rating: 5,
    para: 'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!',
    image: Customer3,
  },
  {
    id: 4,
    name: 'Natcha Phongchai',
    profession: 'Nutritionist',
    rating: 4,
    para: 'FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.',
    image: Customer4,
  },
]