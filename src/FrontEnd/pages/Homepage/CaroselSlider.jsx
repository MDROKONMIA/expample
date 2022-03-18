import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function CaroselSlider(props) {

    const { sliderItems } = props;
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (

        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
        >
            {sliderItems.map((el, index) => {
                return (
                    <div className='pl-2 pr-2'>
                        <div className='slider_products-card'>
                            <div className='slider_products-main'>
                                <img src={el.img} className="bg-cover object-contain h-full w-full" />
                            </div> 
                                <div className='slider_products-name-price'>
                                    <div className='slider_products-name'>Beaf/Cow</div>
                                    <div className='slider_products-price'>100tk</div>
                                </div>
                             
                            <button className='slider_products-buyNow-Button'>Boy now</button>
                        </div>
                    </div>

                )
            })}
        </Carousel>
    )
}
