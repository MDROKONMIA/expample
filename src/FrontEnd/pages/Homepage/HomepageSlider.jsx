import React, { useRef } from 'react';
import HeroSlider, { Slide, Nav, SideNav, MenuNav, ButtonsNav, AutoplayButton, OverlayContent, OverlayContainer, } from 'hero-slider';
import styled from 'styled-components'; 
import * as im from 'react-icons/im';
import Image from '../../img/Image';


const SliderContent = () => {
    return (
        <>
            <div className='w-full h-full flex flex-col items-center justify-center aninationZoomIn text-white opacity-100'>
                <div className="text-9xl slider-content-header font-thin tracking-widest">Gta Halal Meat</div>
                <div className="text-4xl slider-content-header tracking-normal mt-4">comming soon</div>
                <button className="text-2xl slider-content-header bg-green-900 rounded-full cursor-pointer">
                    <div className="p-3 cursor-pointer">shop now</div>
                     
                </button>
            </div>
        </>
    )
}

const HomepageSlider = () => {
    const SliderImage = new Image(1).HomePageSliderImage();
    const StyledOverlayContainer = styled(OverlayContainer)`
  &&& {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.33);
    text-align: center;
    H2, H3 {
      margin: 0 36px;
    }
  }
`;
    const nextSlideHandler = useRef();
    const previousSlideHandler = useRef();
    return (
        <>
            {/* homepage big  Image slider */}
            <section className='-mt-4 overflow-visible relative'>
                <HeroSlider
                    nextSlide={nextSlideHandler}
                    previousSlide={previousSlideHandler}
                    orientation="horizontal"
                    slidingAnimation="fade"
                    initialSlide={1}
                    style={{
                        color: '#FFF',
                        opacity: "0.5",
                        
                    }}
                    settings={{
                        slidingDuration: 600,
                        slidingDelay: 100,
                        shouldAutoplay: true,
                        shouldDisplayButtons: false,
                        autoplayDuration: 5000,
                        height: '100vmin',
                    }}>

                    <StyledOverlayContainer>
                        {/* <h1>
                            Zoom Slider
                        </h1>
                        <h1>
                            Slides&apos; backgroundAnimation prop set to &apos;zoom&apos; (you may have to
                            reload the page if it&apos;s already over)
                        </h1> */}

                        <div className='w-full absolute flex  top-1/2 text-while justify-between'>
                            <button className='text-5xl focus:outline-none pl-2' onClick={() => previousSlideHandler.current()}  > <im.ImCircleLeft /></button>
                            <button className='text-5xl focus:outline-none pr-2' onClick={() => nextSlideHandler.current()}  > <im.ImCircleRight /> </button>
                        </div>
                    </StyledOverlayContainer>

                    {SliderImage.map((el, index) => {
                        return (
                            <Slide
                                background={{
                                    backgroundImage: el,
                                    backgroundAnimation: 'zoom'
                                }}
                                children={SliderContent()}
                            />
                        )
                    })}

                </HeroSlider>
            </section>
            {/* End of homepage big  Image slider */} 
        </>
    )
}
export default HomepageSlider;
