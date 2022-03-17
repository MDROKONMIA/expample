import React from 'react'
import logo from '../img/logo.png';
import * as fi from 'react-icons/fi';
import * as bi from 'react-icons/bi';
import * as fa from 'react-icons/fa';
import * as bs from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';


export default function Navbar() {
    const NavItem = [
        { title: "Home", url: "/home" },
        {
            title: "Shop", url: "/shop",
            submenu: [
                { title: "cloth", url: "/cloth" },
                { title: "cloth", url: "/cloth" },
                { title: "cloth", url: "/cloth" },
                { title: "cloth", url: "/cloth" }
            ]
        },
        { title: "About", url: "/about" },
        { title: "Contact", url: "/contact" },
        { title: "Blog", url: "/blog" },
    ];
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
                                    <div className="header-advance-search">
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

                    <div className='w-full bg-green-900'>
                        <div className='container h-16'>
                            <ul className='flex items-center flex-row'>
                                {NavItem.map((el,index) => {
                                    return (
                                        <>
                                            <li key={index} onMouseEnter={HanldeDropdown(index)} className='Menulist'><span>{el.title}</span><span>{el.submenu && <fa.FaAngleDown size={"1.2rem"} />}</span></li>
                                            {el.submenu && <div className='text-white'>
                                                {el.submenu.map((submenuItems, index) => {
                                                    return (
                                                        <li>{submenuItems.title}</li>
                                                    )
                                                })}

                                            </div>}  
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
