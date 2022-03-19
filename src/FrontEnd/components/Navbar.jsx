import React, { useState } from 'react'
import logo from '../img/logo.png'; 
import * as bi from 'react-icons/bi';
import * as fa from 'react-icons/fa';
import * as bs from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import ImageBeaf from '../img/meat-1.jpg';
import ImageGoat from '../img/meat-2.jpg';
import ImageChiken from '../img/meat-3.jpg';

export const NavItem = [
    { title: "Home", url: "/home" },
    {
        title: "Shop", url: "/shop",
        submenu: [
            { title: "Beep/Veal", url: "/category/beap-veal", img:ImageBeaf },
            { title: "Goat/Lamb", url: "/category/goat-lamb", img:ImageChiken },
            { title: "Chiken", url: "/category/Chiken", img:ImageGoat }, 
        ]
    },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Blog", url: "/blog" },
];
export default function Navbar() {
    
    const [dropdown, setDrowpdown] = useState(false);
    const HanldeDropdown = (data) => setDrowpdown(data);
    return (
        <>
            <div style={{ height: "50px", backgroundColor: "white" }}></div>
            <section>

                <div className='header header-bottom header-sticky'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-3 col-sm-12 col-xs-12 text-lg-left text-md-center text-sm-center relative">
                                {/* Logo */}
                                <div className="logo">
                                    <Link to={"https://www.gtahalalmeat.com"}>
                                        <img src={logo} className="img-fluid" alt="logo" />
                                    </Link>
                                </div>
                                {/* End of Logo  */}
                            </div>
                            <div className="col-md-9 col-sm-12 col-xs-12 text-lg-left text-md-center text-sm-center relative">
                                {/* Logo */}
                                <div className="h-52 flex-lg-nowrap items-center justify-between flex-sm-wrap flex-md-wrap flex">
                                    {/* Header contact  */}
                                    <div className='header-contact flex'>
                                        <bs.BsHeadphones size={"3rem"} className="mr-2 text-gray-600" />
                                        <div className='flex flex-col'>
                                            <div className='font-bold text-lg text-gray-600 tracking-wide'>Phone</div>
                                            <div className='text-pink-400'>01738240159</div>
                                        </div>
                                    </div>
                                    {/* End of Header contact  */}

                                    {/* Advanced search bar  */}
                                    <div className="header-advance-search w-1/2">
                                        <form action="https://www.gtahalalmeat.com/search" method="get" className='flex items-center justify-center'>
                                            <input value="" type="text" name="search" placeholder="Search your product" className='header-advance-search-input' />
                                            <button className='search-button'>
                                                <span class="header-advance-search-icon"><fa.FaSearch size={"1.5rem"} /></span></button>
                                        </form>
                                    </div>
                                    {/* End of Advanced search bar  */}

                                    {/* Shoping Cart */}
                                    <div className='header-shoping-cart'>
                                        <bi.BiShoppingBag size={"3.5rem"} className="mr-2 text-gray-600" />
                                        <div className='flex flex-col'>
                                            <div className='font-bold text-sm text-gray-600 tracking-wide'>Shoping Cart</div>
                                            <div className='text-gray-400'>0 items- 0 $</div>
                                        </div>
                                    </div>
                                    {/* End of Shoping cart  */}
                                </div>
                                {/* End of Logo  */}
                            </div>
                        </div>
                    </div>

                    <div onMouseLeave={() => HanldeDropdown(false)} className='w-full bg-green-lighter'>
                        <div className='container'>
                            <ul className='flex items-center flex-row'>
                                {NavItem.map((el, index) => {
                                    return (
                                        <>
                                            <li key={index} onMouseEnter={() => HanldeDropdown(index)} className='menulist'>
                                                <NavLink to={el.url} className={({ isActive }) =>isActive ? "active" : "" }>{el.title}</NavLink>
                                                <span>{el.submenu && <fa.FaAngleDown size={"1.2rem"} />}</span>
                                                {(dropdown===index && el.submenu) && <div className='menulist-submenu'>
                                                    <ul className='menulist-submenu-area'>
                                                    {el.submenu.map((submenuItems, index) => {
                                                        return (
                                                            <li className=' p-2 text-gray-500'><Link to={submenuItems.url} className="text-gray-600 hover:text-black">{submenuItems.title}</Link></li>
                                                        )
                                                    })}
                                                   </ul>
                                                </div>}
                                            </li>
                                        </>
                                    )
                                })

                                }
                            </ul>
                        </div>
                    </div>





                </div>




            </section>

        </>
    )
}
