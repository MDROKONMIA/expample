import React from 'react'

export default function FooterTop() {
    return (
        <section className='container-fluid bg-green-lighter pt-12 pb-12 mt-8'>
            <div className='container'>
                <div className='row well items-center'>
                    <div className="col-lg-4 col-md-12 col-sm-12 mb-sm-20 mb-xs-20">
                        {/* --=======  newsletter title =======-- */}
                        <div className="newsletter-title">
                            <h1 className='flex whitespace-nowrap text-white font-halal items-center'>
                                <img src="https://www.gtahalalmeat.com/public/frontend/images/icon-newsletter.png" alt="" style={{ height: '28px' }} className="mr-2" />
                                Send Newsletter
                            </h1>
                        </div>

                        {/* --=======  End of newsletter title  =======-- */}
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 mb-sm-20 mb-xs-20"> 
                        <div className='flex flex-wrap flex-sm-nowrap items-center p-2'>
                        <p class="mb-xs-20 w-1/3 font-halal realtive font-thin text-white text-sm tracking-wide pr-1">Sign up for our newsletter to receive updates and Exclusive offers</p>
                        <div className="mb-xs-20 header-advance-search w-2/3">
                                <form action="https://www.gtahalalmeat.com/search" method="get" className='flex items-center justify-center'>
                                <input type="hidden" name="_token" value="D2P1lQX2MM2PJLCUrnDHxLlvWryIfu1EbkO7CVof"/>
                                <input type="text" name="email" placeholder="Enter your email" className='header-advance-search-input text-black' />
                                <button className='submit-button'>Subscribe!</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
