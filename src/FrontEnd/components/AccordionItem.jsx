import React from 'react';
import * as bi from "react-icons/bi";

export const AccordionItem = ({faq,onToggle,active}) => {
    const { question, answer } = faq; 
    return ( 
        <>  
            <div onClick={onToggle} className='flex mt-1 justify-between focus:outline-none w-full border-2 bg-green-500 p-2 rounded-md cursor-pointer'>
                <span>{question}</span>
                <span>
                {active?<bi.BiChevronUp size={"2rem"}/>:<bi.BiChevronDown size={"2rem"}/>}
                </span></div>
             
         
          <div className={`${active ? 'block' : 'hidden'} text-gray-600 border-b-2  pt-1 pb-1 border-gray-300`}>{answer}</div>
    </>
  )
}
