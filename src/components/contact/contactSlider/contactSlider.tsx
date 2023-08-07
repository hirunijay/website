import React from 'react';
import imgsl1 from '../../../common/assets/images/sliderImages/imgsl1.jpg'
import imgsl2 from '../../../common/assets/images/sliderImages/imgsl2.jpg'
import imgsl3 from '../../../common/assets/images/sliderImages/imgsl3.jpg'
import imgsl4 from '../../../common/assets/images/sliderImages/imgsl4.jpg'
import imgsl5 from '../../../common/assets/images/sliderImages/imgsl5.jpg'
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './contactSliderStyle.css';

// import required modules
import { Pagination } from 'swiper';

const data = [
    {
        id: 1,
        img: imgsl1,
    },
    {
        id: 2,
        img: imgsl2,
    },
    {
        id: 3,
        img: imgsl3,
    },
    {
        id: 4,
        img: imgsl4,
    },
    {
        id: 5,
        img: imgsl5,
    }
]


function ContactSlider() {
    
    return(
        <div className='border-[15px] border-gray-50 h-[600px] w-[70vw] flex flex-col ml-auto mr-auto items-center mt-[10vh] mb-[5vh] rounded-[30px] bg-white'>
            
            <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper rounded-[15px] drop-shadow-2xl"
        autoplay={{
            delay: 3000, // Adjust the delay (in ms) between slides
            disableOnInteraction: false, // Allow autoplay to continue even when the user interacts with the Swiper
          }}
      >
        {data.map((item) => {
            return (
                <SwiperSlide key={item.id}>
                    <div className="w-[100%] h-[100%] flex flex-col items-center justify-center ">
                        <Image src={item.img} alt="imgsl1" layout="fill" objectFit="cover" className='rounded-[15px] '/>
                    </div>
                </SwiperSlide>
            )
        })}
        
      </Swiper>
            
            
        </div>
    )
}

export default ContactSlider;