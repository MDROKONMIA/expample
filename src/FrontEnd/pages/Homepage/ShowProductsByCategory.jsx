import React from 'react'
import { useParams } from 'react-router-dom' 
import * as NavItems from '../../components/Navbar';
import { ShowProduct } from '../../components/ShowProduct';


export const ShowProductsByCategory = (props) => {
    const params = useParams();
    const ProductsData = NavItems.NavItem[1].submenu.find((element) => {
        return element.url === '/category/' + params.slug;
    });
    return (
        < ShowProduct productData = { ProductsData } />  
    )
}
