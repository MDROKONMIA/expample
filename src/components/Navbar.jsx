import React from 'react'
import logo from '../opensea.svg';
import * as fi from 'react-icons/fi';
import * as fa from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
 

export default function Navbar() {
    const NavItem=[{title:"Home", url:"/home"},{title:"About", url:"/about"},{title:"Contact", url:"/contact"},{title:"Blog", url:"/blog"},]
  return (
      <>
          <section>
              <div className='Navbar bg-white p-6 border-b-2'>
                  <div className='flex flex-row w-full'>
                      <div className='flex  items-center p-2 whitespace-nowrap pr-8 pl-8'>
                          <img src={logo} alt="logo" className='max-w-10 max-h-10' />
                          <span className='font font-extrabold text-4xl ml-2'>Logo</span>
                      </div>
                      <div className='Contact-Numbers'>
                          <div className='contact-number'>
                                <fi.FiPhoneCall size="1.2rem"/><span className='ml-2 tracking-wider text-center text-green-400 font-extrabold'>01738240159</span>
                          </div>
                          <div className='contact-number'>
                                <fi.FiPhoneCall size="1.2rem"/><span className='ml-2 tracking-wider text-center text-green-400 font-extrabold'>01738240159</span>
                          </div>
                          <div className='contact-number'>
                                <fi.FiPhoneCall size="1.2rem"/><span className='ml-2 tracking-wider text-center text-green-400 font-extrabold'>01738240159</span>
                          </div>
                          <div className='contact-number'>
                                <fi.FiPhoneCall size="1.2rem"/><span className='ml-2 tracking-wider text-center text-green-400 font-extrabold'>01738240159</span>
                          </div> 
                      </div>
                      <div className='flex items-center justify-center pl-8 pr-8'>
                          <div className='Query-SearchBar'>
                              <div className='Query-SearchBar-logo'>
                                  <fi.FiSearch size="1.5rem"/>
                              </div>
                          <input type="text" className='Query-SearchBar-inputmain'/>
                        </div>
                      </div>
                      <div className='flex items-center'>
                          {NavItem.map((el, index) => {
                              return (
                                  
                                  <NavLink to={el.url} key={index} className={ ({isActive}) => "MenuItems" + (isActive?" MenuItems-active":"")}>{el.title}</NavLink>
                              )
                          })}
                          
                         <NavLink to={'/login'} className={ ({isActive}) => "MenuItems" + (isActive?" MenuItems-active":"")} ><fa.FaUserCircle size="2rem"/></NavLink>
                      
                      </div>
                 </div>
              </div>
      </section>
      
      </>
  )
}
