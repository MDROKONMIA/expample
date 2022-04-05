import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from '../../components/Navbar';
import { scrollTOP_click_link } from '../../components/scrollTOP_click_link';

const Pages = [{ title: 'Home', url: "/" },];
NavItem[1].submenu.map((el)=>Pages.push(el));  

const TermsPolicy = [{ title: 'Privacy policy', url: "/privacy-policy" }, { title: 'Terms and condition', url: "/terms-condition" }, { title: "Faq's", url: "/faqs" }, { title: 'Refund policy', url: "/refund-policy" },];

const MyAccount = [{ title: 'MyAccount', url: "/login" }, { title: 'Shopping Cart', url: "/shooping-cart" }];

const GtaHalalInfo = [{ title: 'View vendor hala certification', url: "/vendor-cirtification" }, { title: 'About us', url: "/about-us" }];

const QuickLiksCateories = [{ heading: "Pages", items: Pages }, { heading: "Terms of service", items: TermsPolicy },{ heading: "My Account", items: MyAccount }, { heading: "gta hala info", items: GtaHalalInfo }];

export default function FooterQuickLinks() {
    return (
        <section className='container-fluid bg-white pb-50px'>
            <div className='container'>
                <div className="w-full flex justify-between flex-wrap flex-row">
                    {/* ####################### This description for Marketplace Quick links ######################## */}
                    {QuickLiksCateories.map((el, index) => {
                        return (
                            <div className='ml-4 mr-4' key={index}>
                                <div className="font-bold text-left text-black text-uppercase">{el.heading}</div>
                                <div className='text-base mt-2 justify-center text-black'>
                                    <ul className='text-left'>
                                        {el.items.map((item, subindex) => {
                                            return (
                                                <>
                                                    <li className="mt-2 font-bold" key={subindex}>
                                                        <Link to={item.url} onClick={scrollTOP_click_link} className='text-gray-500 text-uppercase text-xs hover:text-black'>{item.title}</Link>
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='border-b-2 mt-5 border-gray-300'></div>
            </div>
        </section>
    )
}
