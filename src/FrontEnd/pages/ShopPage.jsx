import React from 'react'
import { NavItem } from '../components/Navbar'
import { ShowProduct } from '../components/ShowProduct'

export const ShopPage = () => {
    return (
        <div className='container'>
            {NavItem[1].submenu.map((item, index) => {
                return ( 
                    < ShowProduct productData={item} key={index} max={20}/>  
                )
            })}
        </div >
    )
}
