import { BiChevronUp } from "react-icons/bi";
import React from 'react'
import { useEffect } from 'react'
import { useState } from "react";

function ScrollUp() {
    const [showBtn, setShowBtn] = useState(false)
    useEffect(() => {
        const checkScrollHeight = () => {
            if (!showBtn && window.scrollY >= 400)
                setShowBtn(true)
            else if (showBtn && window.scrollY < 400)
                setShowBtn(false)
        }
        window.addEventListener('scroll', checkScrollHeight)
        return () => {
            window.removeEventListener('scroll', checkScrollHeight)
        }
    }, [showBtn])

    const scroll = () => {
        console.log("scroll");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }

    return (
        <>
        { showBtn &&(<button className={`fixed bottom-5 right-5 text-3xl text-(--textcolor-secound) bg-(--color-main) h-10 w-10 flex justify-center items-center rounded-xl z-40 ${showBtn? 'flex': 'hidden'}`} onClick={scroll}><BiChevronUp /></button>)}
        </>
    )
}

export default ScrollUp