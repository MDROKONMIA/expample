import React from 'react';
import fimg_1 from '../../img/features-1.jpeg';
import fimg_2 from '../../img/features-2.jpeg';
import fimg_3 from '../../img/features-3.jpeg';
import fimg_4 from '../../img/features-4.jpeg';
import arabic_pic from '../../img/Attachment_arabic.png';
import CaroselSlider from './CaroselSlider';

const HomepageFeatures = () => {
    const FeaturesDetails = [
        {
            img: fimg_2,
            headLine: "Quality Promise",
            descrription: "Here at GTA Halal Meat, we promise to always delivery high quality products to your door and never compromise on this commitment."
        },
        {
            img: fimg_1,
            headLine: "100% HALAL",
            descrription: "All Halal Meats are Hand Slaughtered and we only work with HMA Certified vendors and suppliers in Canada"
        },
        {
            img: fimg_3,
            headLine: "Easy & Convenient",
            descrription: "Our website is very user friendly and makes the entire ordering process very Easy and Convenient for our Customers."
        },
        {
            img: fimg_4,
            headLine: "Fast Delivery",
            descrription: "We are committed to deliver you high quality products. GTA Residents can get their Halal Meat orders as quickly as next day."
        },
    ];
    const SliderProductsHeadline = ["Beaf/Ox", "Hean/Chicken", "Goat/Lamb"];
    return (
        <>
            <section className="container-fluid bg-gray-200">
                <div className='container'>
                    <div className="row justify-center homepage-features">
                        {FeaturesDetails.map((el, index) => {
                            return (
                                <div className='col-sm-6 col-md-5 col-lg-3 text-center mt-2'>
                                    <div className='bg-white w-full h-80 max-h-80 p-4 text-center flex flex-col items-center rounded-xl'>
                                        <div className='h-24 w-full max-h-24 max-w-full flex justify-center items-center'>
                                            <img src={el.img} className="rounded-full w-full h-full" alt="" />
                                        </div>
                                        <h className=' text-black mt-4 mb-3 text-xl font-extrabold'>{el.headLine}</h>
                                        <p className='text-sm text-gray-500 font-semibold'>{el.descrription}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            {/* ####################################### Banner #########################################*/}
            <section className='container-fluid p-7' style={{ background: "#adbcdb" }}>
                <div className='row no-gutters text-capitalize'>
                    <div className="col-sm-6 align-self-center">
                        <div className="text-left">
                            <h2 className="text-center">10% of Our Net Profit Will Be Donated To an Orphanage</h2>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-0 justify-content-start align-items-start justify-content-lg-center">
                        <div className='w-full flex items-center justify-center'><img className="img-fluid" src={arabic_pic} alt="photo" /></div>
                    </div>
                </div>
            </section>
            {/* ################################ Our Products ##################################  */}
            <section className='container-fluid'>
                <div className='w-full text-center text-5xl font-semibold text-uppercase mt-4'>Our Products</div>
                <div className='row mt-5 mb-5'>
                    {FeaturesDetails.map((el, index) => {
                        return (
                            <div className=' col-sm-6 col-md-2 col-lg-3 overflow-hidden mt-2'>
                                <div className='our_products_card'>
                                    <div className='our_products_list'>
                                        <img src={el.img} className="bg-cover object-contain h-full w-full" />
                                    </div>
                                    <div className='our_products-name'>Beaf/Cow</div>
                                    <button className='our_products-buyNow-Button'>Boy now</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* CaroselSlide  */}
            {SliderProductsHeadline.map((el, index) => {
                return (
                    <section className='container-fluid mb-3'>

                        <div className='container'>
                            <h1 className='text-black text-2xl text-center w-full hover:text-blue-400 cursor-pointer mt-3 mb-3'>{el}</h1>
                            {<CaroselSlider sliderItems={FeaturesDetails} />}
                        </div>

                    </section>
                )
            })}

            {/* ################################ START VIDEO ################################  */}
            <div style={{ margintop: '30px', marginBottom: '-30px' }} className="iframe-container container">
                <div style={{ height: '30px' }}></div>
                <iframe src="https://www.youtube.com/embed/h29qhlMR2gQ?autoplay=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;theme=light" frameborder="0" __idm_id__="24577">
                </iframe>
            </div>
            {/* ################################ START VIDEO ################################  */}

        </>
    );
}
export default HomepageFeatures;
