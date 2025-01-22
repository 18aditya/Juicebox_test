'use client'
import styles from "./home.module.css";
import React from 'react';
import animationData from "../../../public/JB2G_Lottie.json";
import Lottie from "lottie-react";
import { Button } from "@/component/Button";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Walkthrough from "../walkthrough";
import { bannerCaption } from "./home.constant";
import useHome from "./home.hook";
import Form from "../form";

import Input from "@/component/Input";

export default function Home() {

    const {
        handleGetStarted,
        handleRealityCheck,
        innerSwiperRef,
        screen,
        swiperRef,
        lottieRef,
        isEnd,
        setIsEnd,
        value,
        email,
        setEmail,
        handleSubmitEmail,
        handleSubmitName,
        setValue,
    } = useHome()
    console.log(screen)
    return (
        <div className={styles.main}>
            <div style={{ height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <div className={styles.juicebox}>
                    <div className={styles.hero}>
                        <div ref={lottieRef}>
                            <Lottie animationData={animationData} loop={true} />
                        </div>
                        {screen === 0 ? <div className={styles.bannerText}>
                            {bannerCaption.map((dt, index) =>
                                <h5 key={index} className={styles.captions}>
                                    {dt}
                                </h5>
                            )}
                        </div> : <></>}
                    </div>
                </div>
                <div>
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}

                        allowTouchMove={false}
                        slidesPerView={1}>
                        <SwiperSlide >
                            <div className={styles.caption}>
                                Compare your thoughts on <span className={styles.span}>technology</span> with current industry opinions.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ paddingInline: '20px' }}>
                            <Walkthrough innerSwiperRef={innerSwiperRef} setIsEnd={setIsEnd} />
                        </SwiperSlide>
                        <SwiperSlide style={{ paddingInline: '20px' }}>
                            <Form text="Let’s start with the basics. Type in your first name." />
                        </SwiperSlide>
                        <SwiperSlide style={{ paddingInline: '20px' }}>
                            <Form text="How should we contact you? Type in your email address." />
                        </SwiperSlide>
                        <SwiperSlide style={{ paddingInline: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', height: '150px' }}>
                                <div className={styles.confirmation}>
                                    Thanks, {value}! Now, it’s time to get a reality check.
                                </div>
                                <div className={styles.confirmation}>
                                    This will take 2-3 minutes.
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
            <footer className={styles.footer}>
                {screen === 0 ?
                    <Button text='Get a reality check' type='main' onClick={handleRealityCheck} /> :
                    screen === 1 ?
                        <Button
                            text={isEnd ? 'Get Started' : 'Continue'}
                            type={isEnd ? 'tertiary' : 'secondary'}
                            onClick={() => handleGetStarted()} /> :
                        screen === 2 ?
                            <Input placeholder="First Name" name="name" title="Name" value={value} onChange={(e) => { setValue(e.target.value) }} onSubmit={() => handleSubmitName()} /> :
                            screen === 3 ?
                                <Input type='email' placeholder="Email Address" name="email" title="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} onSubmit={() => handleSubmitEmail()} /> :
                                <Button text='Continue' type='tertiary' onClick={() => null} />}
            </footer>
        </div >
    );
}
