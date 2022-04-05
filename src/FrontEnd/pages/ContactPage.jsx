import React from 'react';
import { IoIosPhonePortrait } from 'react-icons/io';
import { GoMailRead } from 'react-icons/go';

export const ContactPage = () => {

    const OurContactInfo = ({icon,title, contactLink}) => {
        return (
            <div className='header-contact flex mb-xs-20 items-center cursor-pointer'>
               {icon}
            <div className='flex flex-col'>
                <div className='font-semibold text-sm text-gray-800 tracking-wide'>{title}</div>
                <div className='text-black font-thin text-sm'>{contactLink}</div>
            </div>
        </div>
        )
    }
    return (
        <section className='container-fluid bg-gray-200'>
            <div className='container pt-50px'> 
                <div className='row'>
                    <div className='col-xl-4 col-lg-4 col-sm-12 col-md-12'>
                        <div className='flex flex-col'>
                            <div className='headers mb-12'>Contact us</div>
                            {<OurContactInfo icon={<GoMailRead size={"3rem"} className="mr-2 text-black" />} title={"Email"} contactLink={"miarokon2001@gmail.com"} />}
                            <div className='border-b-2 mb-50px mt-50px border-gray-300'></div>

                            {<OurContactInfo icon={<IoIosPhonePortrait size={"3rem"} className="mr-2 text-black" />}title={"Phone Number"} contactLink={"01738240159"} />}

                        </div>
                    </div>
                    <div className='col-xl-8 col-lg-8 col-sm-12 col-md-12'>
                        <h2 className='headers'>Text with us</h2>
                        <form className='w-full'>
                            {/* ################################ Name #################################  */}
                            <div className='flex flex-col mt-3 mb-3'>
                                <label className='text-gray-600 mb-0 font-normal text-normal'>Your Name<span className='text-red-500 font-medium text-xl'>*</span></label>
                                <input type="text" name="client_name" className='w-full h-10 border-2 border-gray-300 outline-none mt-2 bg-white p-2' placeholder='Enter your name'/>
                            </div>
                             {/* ################################ Email #################################  */}
                            <div className='flex flex-col mt-3 mb-3'>
                                <label className='text-gray-600 mb-0 font-normal text-normal'>Your Email<span className='text-red-500 font-medium text-xl'>*</span></label>
                                <input type="email" name="client_email" className='w-full h-10 border-2 border-gray-300 bg-white outline-none mt-2 p-2' placeholder='Enter your email' />
                            </div>
                             {/* ################################ Subject #################################  */}
                            <div className='flex flex-col mt-3 mb-3'>
                                <label className='text-gray-600 mb-0 font-normal text-normal'>Subect<span className='text-red-500 font-medium text-xl'>*</span></label>
                                <input type="text" name="client_subject" className='w-full h-10 border-2 border-gray-300 bg-white outline-none mt-2 p-2' placeholder='Enter subject'/>
                            </div>
                             {/* ################################ Description #################################  */}
                            <div className='flex flex-col mt-3 mb-3'>
                                <label className='text-gray-600 mb-0 font-normal text-normal'>Description<span className='text-red-500 font-medium text-xl'>*</span></label>
                                <textarea type="text" name="description"className='w-full h-32 border-2 border-gray-300 bg-white outline-none mt-2 p-2 ' placeholder='Enter subject'></textarea>
                                 
                            </div>
                            <button type='submit' className='p-1 mb-50px h-10 border-2 bg-white w-32 text-xl text-uppercase font-bold'>Sent</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
