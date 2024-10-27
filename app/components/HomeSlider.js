'use client';

import React, { createContext, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import { EffectCards, Navigation } from 'swiper/modules';
import Image from 'next/image';
import burgerImage from '@/public/images/burger.jpg';
import Curry from '@/public/images/curry.jpg';
import Dumplings from '@/public/images/dumplings.jpg';
import Macncheese from '@/public/images/macncheese.jpg';
import Pizza from '@/public/images/pizza.jpg';
import Snitzel from '@/public/images/schnitzel.jpg';
import Salad from '@/public/images/tomato-salad.jpg';



export default function HomeSlider() {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper w-[320px]"  // Added a width to ensure proper rendering
    >
      <SwiperSlide className='shadow-sm'>

        <Image
          src={burgerImage} // Path to your image in the public folder
          alt="burger"
          width={260}
          height={200}
          className="rounded object-cover"
        //priority // Add this for the first image that appears above the fold
        />
      </SwiperSlide>
      <SwiperSlide>

        <Image
          src={Curry} // Path to your image in the public folder
          alt="curry"
          width={260}
          height={200}
          className="rounded object-cover"
        //priority // Add this for the first image that appears above the fold
        />
      </SwiperSlide>
      <SwiperSlide>

        <Image
          src={Dumplings} // Path to your image in the public folder
          alt="dumplings"
          width={260}
          height={200}
          className="rounded object-cover"
        //priority // Add this for the first image that appears above the fold
        />
      </SwiperSlide>
      <SwiperSlide>

        <Image
          src={Macncheese} // Path to your image in the public folder
          alt="macncheese"
          width={260}
          height={200}
          className="rounded object-cover"
        //priority // Add this for the first image that appears above the fold
        />
      </SwiperSlide>
      <SwiperSlide>

        <Image
          src={Snitzel} // Path to your image in the public folder
          alt="schnitzel"
          width={260}
          height={200}
          className="rounded object-cover"
        //priority // Add this for the first image that appears above the fold
        />
      </SwiperSlide>
      <SwiperSlide>

        <Image
          src={Pizza} // Path to your image in the public folder
          alt="pizza"
          width={260}
          height={200}
          className="rounded object-cover"
        //priority // Add this for the first image that appears above the fold
        />
      </SwiperSlide>
      <SwiperSlide>

        <Image
          src={Salad} // Path to your image in the public folder
          alt="tomato-salad"
          width={260}
          height={200}
          className="rounded object-cover"
        //priority // Add this for the first image that appears above the fold
        />
      </SwiperSlide>

    </Swiper>
  );
}