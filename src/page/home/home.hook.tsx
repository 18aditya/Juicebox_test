import { StateContext } from "@/context/context";
import { useContext, useEffect, useRef, useState } from "react";
import { SwiperClass } from "swiper/react";

import gsap from "gsap";

export default function useHome() {

    const { state, setState } = useContext(StateContext);
    const { screen } = state

    const [isEnd, setIsEnd] = useState(false);
    const [value, setValue] = useState('');

    const [email, setEmail] = useState('');

    const swiperRef = useRef<SwiperClass>(undefined);
    const innerSwiperRef = useRef<SwiperClass>(undefined);
    const lottieRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (lottieRef.current) {
            gsap.set(lottieRef.current, {
                width: "300px",
                height: "300px",
                position: 'absolute',
            });
        }
    }, []);

    const handleSubmitName = () => {
        swiperRef.current?.slideNext()
        setState({ screen: swiperRef.current?.activeIndex })
    }

    const handleSubmitEmail = () => {
        swiperRef.current?.slideNext()
        setState({ screen: swiperRef.current?.activeIndex })
    }

    const handleResizeRealityCheck = () => {
        if (lottieRef.current) {
            gsap.to(lottieRef.current, {
                height: '155px',
                width: '145px',
                marginBlock: '48px',
                position: 'relative',
                duration: 0.5,
                ease: "power2.out",
            });
        }
    };


    const handleResizeGetStarted = () => {
        if (lottieRef.current) {
            gsap.to(lottieRef.current, {
                height: '30px',
                width: '30px',
                marginBlock: '32px',
                position: 'relative',
                duration: 0.5,
                ease: "power2.out",
            });
        }
    };


    const handleRealityCheck = () => {
        swiperRef.current?.slideNext()
        handleResizeRealityCheck()
        setState({ screen: swiperRef.current?.activeIndex })
    }


    const handleGetStarted = () => {
        isEnd ? swiperRef.current?.slideNext() : innerSwiperRef.current?.slideNext()
        isEnd && handleResizeGetStarted()
        setState({ screen: swiperRef.current?.activeIndex })
    }
    return {
        value,
        handleSubmitEmail,
        email,
        setEmail,
        setValue,
        handleSubmitName,
        handleGetStarted,
        handleRealityCheck,
        innerSwiperRef,
        screen,
        swiperRef,
        lottieRef,
        isEnd,
        setIsEnd
    }
}