import React, { useState,useEffect } from 'react'

export const useSticky = (height) => {
    const [sticky, setSticky] = useState(false);
    const isSticky = () => {
        if (window.pageYOffset > height) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        }
    }, [sticky, setSticky])
    return sticky;
}
