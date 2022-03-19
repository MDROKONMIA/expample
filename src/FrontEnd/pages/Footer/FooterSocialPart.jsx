import React from 'react';
import * as bs from 'react-icons/bs';
import * as io from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function FooterSocialPart() {
    return (
        <div className="social-contact-section pt-50px pb-50px">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 order-2 order-md-2 order-sm-2 order-lg-1">
                        {/* <!--=======  social media links  =======--> */}

                        <div className="social-media-section">
                            <h2 className='headers'>Follow us</h2>
                            <div className="social-links flex w-full justify-start">
                                <Link className="mr-2" to={"https://www.facebook.com/GTA-Halal-Meat-112787643750434"}><bs.BsFacebook size={"2rem"} /></Link>
                                <Link className="bg-khayeri-100 rounded-full w-8 h-8 items-center justify-center flex hover:bg-khayeri-200" to={"https://www.instagram.com/gtahalalmeat/"}><bs.BsInstagram size={"1.2rem"} className="text-white" /></Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-8 col-md-12 order-1 order-md-1 order-sm-1 order-lg-2  mb-sm-50 mb-xs-50">
                        {/* <!--=======  contact summery  =======--> */}

                        <div className="contact-summery">
                            <h2 className='headers'>Contact us</h2>

                            {/* <!--=======  contact segments  =======--> */}

                            <div className="contact-segments d-flex justify-content-between flex-wrap flex-lg-nowrap">
                                {/* <!--=======  single contact  =======--> */}


                                {/* <!--=======  End of single contact  =======-->
                            <!--=======  single contact  =======--> */} 
                                    <div className='header-contact flex mb-xs-20 items-center cursor-pointer'>
                                        <io.IoIosPhonePortrait size={"3rem"} className="mr-2 text-black" />
                                        <div className='flex flex-col'>
                                            <div className='font-semibold text-sm text-gray-800 tracking-wide'>Phone:</div>
                                            <div className='text-black font-thin text-sm'>01738240159</div>
                                        </div>
                                    </div>
                                 
                                {/* 
                            <!--=======  End of single contact  =======-->
                            <!--=======  single contact  =======--> */}

                                <div className="single-contact d-flex items-center cursor-pointer text-gray-600 hover:text-black">
                                    <div className="mr-3">  
                                        <io.IoIosMail size={"3rem"}/>
                                    </div>
                                    <div className="flex items-center">
                                        <p>Email:<br/> <span>gtahalalmeat@gmail.com</span></p>
                                    </div>
                                </div>

                                {/* <!--=======  End of single contact  =======--> */}
                            </div>

                            {/* <!--=======  End of contact segments  =======--> */}



                        </div>

                        {/* <!--=======  End of contact summery  =======--> */}

                    </div>
                </div>
                <div className='border-b-2 mt-5 border-gray-300'></div>
            </div>
        </div>
    )
}
