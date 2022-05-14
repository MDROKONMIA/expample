import React, { useState } from 'react';
import { CardImageWithPrice } from './CardImageWithPrice';

export const ShowProduct = ({ productData, max}) => {
    
    const [pageNo, setPageNo] = useState(1);
    const Product = ({ img, active, si }) => {   
        return (
            <div className={`${active} col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-2`}>
                <CardImageWithPrice img={img} price={101+si+'tk'} name={"Beap/Veap"} />
                 
            </div>
        )
    }

    const Products = [];
    for (let i = 0; i < 50; i++) {
        let active;
        if (i < pageNo * max && i >= (pageNo - 1) * max) {
            active = "block";
        } else {
            active = "hidden";
        }
        Products.push(<Product img={productData.img} si={i} key={i} active={active}/>)
    }

    let pagination = (Products.length > max) ? true : false;
    let totalPage = Math.round(Products.length / max);

    return (
        <section className='container-fluid bg-gray-200'>
            <div className='container pt-50px pb-50px md:'>
                <h2 className="headers w-full text-center">{productData.title}</h2>
                <div className='row justify-center mt-4'>
                    {Products}
                </div>

                {pagination && <div className='mt-2 text-center flex justify-center'>
                    <button className={`p-1 hover:${pageNo===1?"":"text-blue-400"} focus:outline-none`} disabled={pageNo===1?true:false} onClick={() => setPageNo(pageNo - 1)}>Prev</button>
                    <div className='p-1'>{pageNo}/{totalPage}</div>
                     
                    <button className={`p-1 hover:${pageNo===totalPage?"":"text-blue-400"} focus:outline-none`} disabled={pageNo===totalPage?true:false} onClick={() => setPageNo(pageNo + 1)}>Next</button>
                </div>}
            </div>
        </section>
    )
}
