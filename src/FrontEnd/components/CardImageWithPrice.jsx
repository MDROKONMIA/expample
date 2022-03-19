import React from 'react'

export const CardImageWithPrice = ({ img, price, name }) => {
  return (
    <div className='pl-2 pr-2'>
    <div className='slider_products-card'>
        <div className='slider_products-main'>
            <img src={img} className="bg-cover object-contain h-full w-full" alt='' />
        </div> 
            <div className='slider_products-name-price'>
                <div className='slider_products-name'>{name}</div>
                <div className='slider_products-price'>{price}/Lb</div>
            </div>
         
        <button className='slider_products-buyNow-Button'>Boy now</button>
    </div>
</div>
  )
}
