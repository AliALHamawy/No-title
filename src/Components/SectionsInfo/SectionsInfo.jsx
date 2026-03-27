import { BiChevronRight } from "react-icons/bi"; 
import React from 'react'
import { Link } from "react-router";

function SectionsInfo(props) {
    return (
        <>
            <div className="sectionsInfo pt-40 pb-20 px-4">
                <svg className="absolute top-0 left-0" width="287" height="254" viewBox="0 0 287 254" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.1" d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z" fill="url(#paint0_linear_111:578)"></path><defs><linearGradient id="paint0_linear_111:578" x1="-40.5" y1="117" x2="301.926" y2="-97.1485" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop></linearGradient></defs></svg>
                <svg className="absolute top-0 right-0" width="628" height="258" viewBox="0 0 628 258" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.1" d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z" fill="url(#paint0_linear_0:1)"></path><path opacity="0.1" d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z" fill="url(#paint1_linear_0:1)"></path><defs><linearGradient id="paint0_linear_0:1" x1="644" y1="221" x2="429.946" y2="37.0429" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_0:1" x1="18.3648" y1="166.016" x2="105.377" y2="32.3398" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop></linearGradient></defs></svg>
                <div className="cont max-w-[1500px] m-auto flex justify-between flex-wrap gap-10">
                    <div className="flex flex-col max-w-[570px]">
                        <h1 className="text-3xl text-(--textcolor-main) mb-5 font-black">{props.title}</h1>
                        <p className="text-[16px] text-(--textcolor-secound)">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolore sequi nostrum sit accusamus porro accusantium .
                            </p>
                    </div>
                    <div className="flex items-center text-xl"><div className="flex gap-1 items-center text-(--textcolor-secound) mr-1">Home<BiChevronRight /></div><Link to={props.link} className="text-(--color-main)">{props.linkTitle}</Link></div>
                </div>
            </div>
        </>
    )
}

export default SectionsInfo