 
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '../../img/Image';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Autoplay, EffectCards, EffectCoverflow, EffectFade, Navigation, Pagination, Parallax } from 'swiper';

const HomepageSlider = () => {
    const Content = () => {
        return (<div className='absolute flex flex-col top-1/2 justify-center w-full opacity-100'>
            <div className="title m-auto text-2xl tracking-tight text-white slider-title" >
                GTA HALAL MEAT
            </div>
            <div className="subtitle m-auto text-xl text-white slider-subtitle"  >
                cOMMING SOON
            </div>
            <div className="subtitle m-auto text-xl text-white slider-body" >
                Buy Now
            </div>
        </div>)
    }
    const SliderImage = new Image(1).HomePageSliderImage();
    return (
        <div className='w-full -mt-4'>
            <Swiper
                modules={[Navigation, Pagination, EffectFade, A11y, Autoplay, Parallax]}
                effect={"fade"}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                parallax={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
            >
                {SliderImage.map((el, index) => {
                    return (
                        <SwiperSlide className='SwiperSlider' style={{ backgroundPosition: "center", backgroundSize: 'cover', height: "500px", overflow: 'hidden' }} key={index}>
                            {Content()}
                            <img src={el} style={{ width: '100%' }} alt="" />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    );
};
export default HomepageSlider;
