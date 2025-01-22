'use client'
import styles from './walkthrough.module.css'
import { caption } from './constant'
import { Button } from '@/component/Button';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import animationData from "../../../public/JB2G_Lottie.json";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Lottie from 'lottie-react';
import { Dispatch, RefObject, SetStateAction, useRef, useState } from 'react';

type props = {
    innerSwiperRef: RefObject<SwiperClass | undefined>
    setIsEnd: Dispatch<SetStateAction<boolean>>
}

const Walkthrough = (props: props) => {

    const { innerSwiperRef, setIsEnd } = props

    const handleSlideChange = () => {
        // Update state when swiper reaches the end
        setIsEnd(innerSwiperRef.current?.isEnd ?? false);
    };

    return (
        <Swiper
            onSwiper={(swiper) => {
                innerSwiperRef.current = swiper;
            }}
            onSlideChange={handleSlideChange}
            allowTouchMove={false}
            pagination={true}
            modules={[Pagination]}
            slidesPerView={1}
            className={styles.walkthrough}
        >
            {caption.map((dt, index) =>
                <SwiperSlide key={index} >
                    <h4 className={styles.context}>
                        {dt}
                    </h4>
                </SwiperSlide>)}
        </Swiper>
    );
}

export default Walkthrough;
