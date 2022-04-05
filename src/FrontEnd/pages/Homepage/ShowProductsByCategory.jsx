import React from 'react'
import { useParams } from 'react-router-dom'
import { CardImageWithPrice } from '../../components/CardImageWithPrice';
import * as NavItems from '../../components/Navbar';


export const ShowProductsByCategory = (props) => {
    const params = useParams(); 
    const ProductsData = NavItems.NavItem[1].submenu.find((element) => {
        return element.url === '/category/' + params.slug;
    });  
    const Product = ({img, key }=props) => {
        return (
            <div className='col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-2' key={key}>
                <CardImageWithPrice img={img} price={"100tk"} name={"Beap/Veap"} />
            </div>
        )
    }

    const Products = [];
    for (let i = 0; i < 50; i++) {
        Products.push(<Product img={ProductsData.img} key={i} />)
    }

    return (
        <section className='container-fluid bg-gray-200'>
            <div className='container pt-50px pb-50px md:'>
                <h2 className="headers w-full text-center">{ProductsData.title}</h2>
                <div className='row justify-center mt-4'>
                    {Products}
                </div>
            </div>
        </section>
    )
}
