import React from 'react'

export const RegistrationForm = () => {
    const CommonInput = ({ type, title, name, placeholder }) => {
        return (
            <div className='col-md-6'>
                <div className='form-row'>
                    <div className='font-opensea nameOfField'>
                        <span>{title}:</span>
                    </div>
                    <div className="flex flex-col mb-2">
                        <div className="input--bar">
                            <input type={type} placeholder={`Enter your ${placeholder}.....`} className="w-full focus:outline-none" name={name} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className='container-fluid bg-gray-200'>
                <div className="container pt-50px">
                    <div className="row">
                        <form className="form registration-form bg-white">
                            <div className='headers text-center w-full mt-4 underline'>Registration</div>
                            <div className='flex flex-wrap mt-3'>
                                <div className='col-md-6'>
                                    <div className='form-row'>
                                        <div className='font-opensea nameOfField'>
                                            <span>First Name:</span>
                                        </div>
                                        <div className="flex flex-col mb-2">
                                            <div className="input--bar">
                                                <input type="text" placeholder='Enter your first name...' className="w-full focus:outline-none" name='first_name' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-row'>
                                        <div className='font-opensea nameOfField'>
                                            <span>Last Name:</span>
                                        </div>
                                        <div className="flex flex-col mb-2">
                                            <div className="input--bar">
                                                <input type="text" placeholder='Enter your last name...' className="w-full focus:outline-none" name='last_name' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='form-row'>
                                    <div className='font-opensea nameOfField'>
                                        <span>Email Address:</span>
                                    </div>
                                    <div className="flex flex-col mb-2">
                                        <div className="input--bar">
                                            <input type="email" placeholder='Enter your email address...' className="w-full focus:outline-none" name='emai_address' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-wrap'>
                                {<CommonInput type={"password"} name={"passord"} title={"Password"} placeholder={"password"} />}
                                {<CommonInput type={"password"} name={"confirm_password"} title={"Confirm Password"} placeholder={"password again"} />}
                            </div>

                            <div className='col-12'>
                                <div className='form-row'>
                                    <div className='font-opensea nameOfField'>
                                        <span>Pressent Adress:</span>
                                    </div>
                                    <div className="flex flex-col mb-2">
                                        <div className="input--bar">
                                            <textarea placeholder='Enter your present address...........' className='texarea_Form' name='present_address'></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12'>
                                <div className='form-row'>
                                    <div className='font-opensea nameOfField'>
                                        <span>Permanent Adress:</span>
                                    </div>
                                    <div className="flex flex-col mb-2">
                                        <div className="input--bar">
                                            <textarea placeholder='Enter your permanent address...........' className='texarea_Form' name='permanent_address'></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-wrap'>
                                {<CommonInput type={"text"} name={"city"} title={"City"} placeholder={"city name"} />}
                                {<CommonInput type={"text"} name={"postal_code"} title={"Postal Code"} placeholder={"postal code"} />}
                            </div>
                            <div className='flex flex-wrap'>
                                {<CommonInput type={"text"} name={"provinence"} title={"Provinence"} placeholder={"provinence"} />}
                                {<CommonInput type={"number"} name={"phone_number"} title={"Phone Number"} placeholder={"phone number"} />}
                            </div> 

                            <div className='col-12'>
                                <div className='form-row'>
                                    <div className='button--area'>
                                        <button className='button w-full' type='submit'>Sing Up</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}