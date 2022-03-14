import React from 'react'
import logo from '../logo.svg';

export const Navbar = () => {
  return (
      <>
          <section>
              <div className='Navbar bg-red-300 p-6'>
                  <div className='flex flex-row w-full'>
                      <div className='p-2'>
                         <img src={logo}/>
                      </div>
                      <div className=''>home</div>
                      <div className=''>home</div>
                      <div className=''>home</div>
                 </div>
              </div>
      </section>
      
      </>
  )
}
