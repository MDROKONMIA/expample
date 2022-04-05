
import React from 'react'
import * as Fc from 'react-icons/fc';
import * as Im from 'react-icons/im';

export const LoginForm = () => {
    return (
        <>
            <div className='container-fluid bg-gray-200'>
                <div className='container pt-50px -mb-50px'> 
                        <form className="form login-form bg-white">
                            <div className='headers text-center w-full mt-4 underline'>Login</div>

                            <div className='form-row'>
                                <div className='font-opensea nameOfField'>
                                    <span>Email:</span>
                                </div>
                                <div className="flex flex-col mb-2">
                                    <div className="input--bar">
                                        <input type="email" placeholder='Enter your first name...' className="w-full focus:outline-none" name='email_address' />
                                    </div>
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='font-opensea nameOfField'>
                                    <span>Password:</span>
                                </div>
                                <div className="flex flex-col mb-2">
                                    <div className="input--bar">
                                        <input type="password" placeholder='Enter your first name...' className="w-full focus:outline-none" name='password' />
                                    </div>
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='button--area'>
                                    <div className="text-left"><input className='mr-4' type="checkbox" /><span>Remember me</span></div>

                                </div>
                            </div>


                            <div className='form-row'>
                                <div className='button--area'>
                                    <button className='button' type='submit'>Login</button>
                                </div>
                            </div>

                            <div className='form-row'>
                                <button><div className="text-gray-400 hover:text-black cursor-pointer">Forgot password</div></button>
                                <button><div className="text-gray-400 cursor-pointer">Don't have an account? &nbsp; <span className='hover:text-black'>Sing-up</span></div></button>
                            </div>

                            <div className='form-row'>
                                <div className='button--area'>
                                    <button className='button-with-social bg-teal-500 hover:bg-teal-700' type='submit'> <Fc.FcGoogle size="2rem" className='mr-4' />  Login with google</button>
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='button--area hover:hover-with-shadow'>
                                    <button className='button-with-social bg-pink-600 hover:bg-pink-700' type='submit'> <Im.ImFacebook2 size="2rem" className='mr-2 text-blue-500' />Login with facebook</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
             


        </>
    )
}