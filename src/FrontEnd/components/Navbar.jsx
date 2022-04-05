import React, { useState } from 'react'
import logo from '../img/logo.png';
import * as bi from 'react-icons/bi';
import * as fa from 'react-icons/fa';
import * as bs from 'react-icons/bs';
import * as im from 'react-icons/im';
import { Link, NavLink } from 'react-router-dom';
import ImageBeaf from '../img/meat-1.jpg';
import ImageGoat from '../img/meat-2.jpg';
import ImageChiken from '../img/meat-3.jpg';
import { scrollTOP_click_link } from './scrollTOP_click_link';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useSticky } from './useSticky';

export const NavItem = [
    { title: "Home", url: "/home" },
    {
        title: "Shop", url: "/shop",
        submenu: [
            { title: "Beep/Veal", url: "/category/beap-veal", img: ImageBeaf },
            { title: "Goat/Lamb", url: "/category/goat-lamb", img: ImageChiken },
            { title: "Chiken", url: "/category/Chiken", img: ImageGoat },
        ]
    },
    { title: "Login", url: "/login" },
    { title: "Regiatration", url: "/registration" },
    { title: "Contact", url: "/contact" },
];



const BigHeaderWithoutLogo = (click, hanldClick, dBlock) => {

    return (
        <div className="col-md-9 col-sm-12 col-xs-12">
            <div className="max-h-28  flex flex-wrap h-28 lg:flex-nowrap items-center justify-between sm:flex-wrap sm:mt-2 md:flex-wrap">
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
                        <input type="text" name="search" placeholder="Search your product" className='header-advance-search-input' />
                        <button className='search-button'>
                            <span className="header-advance-search-icon"><fa.FaSearch size={"1.5rem"} /></span></button>
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

                {dBlock && <div className='header-shoping-cart'>
                    {click ?
                        <button onClick={() => hanldClick(!click)} className="focus:outline-none" ><im.ImCross size={"2rem"} className="mr-2 text-gray-600" /></button> :
                        <button onClick={() => hanldClick(!click)} className="focus:outline-none"> <bi.BiMenu size={"2.5rem"} className="mr-2 text-gray-600" /></button>
                    }
                </div>}

            </div>
            {(click && dBlock) && <ul className='w-full h-48 bg-white rounded-sm overflow-auto'>
                {NavItem.map((item, index) => {
                    return (
                        <li className='p-2 w-full border-2 mb-1'>
                            <NavLink to={item.url} onClick={scrollTOP_click_link} className={({ isActive }) => isActive ? "active menulist-navlink" : "menulist-navlink-forMobile"}>{item.title}</NavLink>
                        </li>
                    )
                })}
            </ul>}

        </div>
    )
}








export default function Navbar() {
    const isTab = useMediaQuery('(max-width: 768px)');
    let logocontrol = false;
    const Sticky = (useSticky(0) && !isTab); 
    const [dropdown, setDrowpdown] = useState(false);
    const HanldeDropdown = (data) => setDrowpdown(data);
    if (Sticky || isTab) { logocontrol = true; } else { logocontrol = false; }
    const [menubarIconClicked, setMenubarIconClicked] = useState(false);



    const HeaderMenuItems = (sticky) => {
        return (
            <ul className='flex items-center flex-row'>
                {NavItem.map((el, index) => {
                    return (
                        <>
                            <li key={index} onMouseEnter={() => HanldeDropdown(index)} className='menulist'>
                                <NavLink to={el.url} onClick={scrollTOP_click_link} className={({ isActive }) => isActive ? "active menulist-navlink" : `${sticky ? "menulist-navlink-sticky" : "menulist-navlink"}`}>{el.title}</NavLink>
                                <span>{el.submenu && <fa.FaAngleDown size={"1.2rem"} />}</span>
                                {(dropdown === index && el.submenu) && <div className='menulist-submenu'>
                                    <ul className='menulist-submenu-area'>
                                        {el.submenu.map((submenuItems, index) => {
                                            return (
                                                <li className=' p-2 text-gray-500'><Link to={submenuItems.url} onClick={scrollTOP_click_link} className="text-gray-600 hover:text-black">{submenuItems.title}</Link></li>
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
        )
    }

    const HeaderMenubar = () => {
        return (<>

            {!Sticky && (<div onMouseLeave={() => HanldeDropdown(false)} className='w-full bg-green-lighter'>
                <div className='container'>
                    {HeaderMenuItems(Sticky)}
                </div>
            </div>)}
        </>)
    }





    return (
        <>
            <div style={{ height: "50px", backgroundColor: "white" }}></div>
            <section className='header-sticky'>
                <div className="header header-bottom">

                    <div className='container'>
                        <div className={`row ${Sticky ? "justify-between h-24 items-center" : ""}`}>
                            <div className="col-md-3 col-sm-12 col-xs-12 text-lg-left text-md-center text-sm-center relative">
                                {/* Logo */}
                                <div className={`${logocontrol ? "top-1/2" : "logo"}`}>
                                    <Link to={"https://www.gtahalalmeat.com"} className="flex items-center justify-center">
                                        <img src={logo} className={`object-cover ${logocontrol ? "h-24" : "img-fluid"}`} alt="logo" />
                                    </Link>
                                </div>
                                {/* End of Logo  */}
                            </div>
                            {Sticky ? HeaderMenuItems(Sticky) : BigHeaderWithoutLogo(menubarIconClicked, setMenubarIconClicked,isTab)}
                        </div>
                    </div>

                    {!isTab && HeaderMenubar()}

                </div>




            </section>

        </>
    )
}
