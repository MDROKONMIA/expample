import React from 'react'
import { Link } from 'react-router-dom'

export default function Copyright() {
    return (
        <section className='container-fluid pb-4'>
            <div className='container'>
                <div className="row align-items-md-center align-items-sm-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center text-md-left">
                        {/* <!--=======  copyright text	  =======--> */}
                        <div className="text-gray-600">
                            <p className="text-gray-600 text-sm mb-0">© 2020 GTA Halal Meat. All Rights Reserved</p>
                            <p className="text-sm mb-0"> Developed by <Link to={"https://devpolash.com"} className="text-gray-500 hover:text-blue-300">Piarujjaman Polash</Link></p>
                        </div>

                        {/* <!--=======  End of copyright text	  =======--> */}

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        {/* <!--=======  payment info  =======--> */}

                        <div className=" text-gray-600 text-center flex justify-center md:float-right">
                            <p className='whitespace-nowrap flex items-center text-md-right text-sm'>We Accept <img src="https://www.gtahalalmeat.com/public/frontend/images/payment-icon.png" className="cursor-pointer text-xs" alt="" /></p>
                        </div>

                        {/* <!--=======  End of payment info  =======--> */}

                    </div>
                </div>
            </div>
        </section>
    )
}
