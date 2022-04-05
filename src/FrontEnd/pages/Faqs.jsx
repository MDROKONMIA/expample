import React, { useState } from 'react';
import { AccordionItem } from '../components/AccordionItem';

export const Faqs = () => {
    const [clicked, setClicked] = useState("0");
    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    }
    const faqs = [
        {
            question: "What is your name?",
            answer: "I am Rokon Mia...",
        },
        {
            question: "what do you do?",
            answer: "I am doing now study",
        },
    ];
    return (
        <div className='faq-area page-content mb-50'>
            <div className='container'>
                <h1 className='w-full text-center'>FAQ'S</h1>
                <div className='card-body'>
                    <ul>
                        {faqs.map((faq, index) => {
                            return (
                                <AccordionItem onToggle={() => handleToggle(index)} active={clicked === index} key={index} faq={faq} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
