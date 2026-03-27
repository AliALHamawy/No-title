import { AiFillGithub } from "react-icons/ai"; 
import { AiFillInstagram } from "react-icons/ai"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import { RxDotFilled } from "react-icons/rx"; 

import { GrView } from "react-icons/gr";
import { BiCommentDetail } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import './BlogDetails.css'

function BlogDetails() {
    return (
        <>
            <div className="blogDetails p-4 lg:p-20 md:p-20">
                <div className="cont max-w-[931.33px] m-auto flex flex-col mt-40">
                    <div className="head border-b border-(--border)">
                        <h1 className=' text-2xl md:text-4xl lg:text-4xl text-(--textcolor-main) font-black '>10 amazing sites to download stock photos & digital assets for free</h1>
                        <div className="flex justify-between items-center text-center align-middle py-8 flex-wrap gap-5">
                            <div className="avatar flex gap-4 items-center">
                                <img src="/assets/images/blog/author-02.png" alt="" />
                                <h1 className='text-(--textcolor-secound)'>By Musharof Chy</h1>
                            </div>
                            <div className="mid flex text-(--textcolor-secound) gap-5">
                                <div className="flex text-xl gap-2 items-center "><MdDateRange /> 72 Mar 2026</div>
                                <div className="flex text-xl gap-2 items-center "><BiCommentDetail />50</div>
                                <div className="flex text-xl gap-2 items-center "><GrView />100</div>
                            </div>
                            <button to="/" className='h-[30px] w-[70px] text-center align-middle items-center justify-center rounded-2xl bg-(--color-main) text-(--textcolor-main) transition-all duration-300 hover:bg-(--hcolor-main) '>Design</button>

                        </div>
                    </div>
                    <p className="text-xl my-5 text-(--textcolor-secound)">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    <img src="/assets/images/blog/blog-details-02.jpg" alt="" className="w-full rounded-sm mb-10" />
                    <p className="text-xl my-5 text-(--textcolor-secound)">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet. Ligula ullamcorpermalesuadaproin libero nunc consequat interdum varius.
                        Quam pellentesque nec nam aliquam sem et tortor consequat. Pellentesque adipiscing commodo elit at imperdiet.</p>
                    <p className="text-xl my-5 text-(--textcolor-secound)">Semper auctor neque vitae tempus quam pellentesque nec. <span className="underline">Amet dictum sit amet justodonec</span> enim diam. Varius sit amet mattis vulputate enim nulla aliquet porttitor.
                        Odio pellentesque diam volutpat commodo sed.</p>
                        <h1 className=' text-2xl md:text-4xl lg:text-4xl text-(--textcolor-main) font-black my-5'>Digital marketplace for Ui/Ux designers.</h1>
                    <p className="text-xl my-5 text-(--textcolor-secound)">consectetur adipiscing elit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate cupidatat.</p>
                    <div className="flex flex-col my-10 gap-5">
                    <p className="text-xl  text-(--textcolor-secound) flex gap-2 items-center"><RxDotFilled />Consectetur adipiscing elit in voluptate velit.</p>
                    <p className="text-xl  text-(--textcolor-secound) flex gap-2 items-center"><RxDotFilled />Mattis vulputate cupidatat.</p>
                    <p className="text-xl  text-(--textcolor-secound) flex gap-2 items-center"><RxDotFilled />Vulputate enim nulla aliquet porttitor odio pellentesque.</p>
                    <p className="text-xl  text-(--textcolor-secound) flex gap-2 items-center"><RxDotFilled />Ligula ullamcorper malesuada proin.</p>
                    </div>
                    <div className="bg-[#4a6cf71a] text-[16px] p-9 rounded-xl text-(--textcolor-secound) abcd relative">
                        
                        <span class="absolute left-0 top-0 z-[-1]"><svg width="132" height="109" viewBox="0 0 132 109" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z" fill="url(#paint0_linear_111:606)"></path><path opacity="0.5" d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z" fill="url(#paint1_linear_111:606)"></path><defs><linearGradient id="paint0_linear_111:606" x1="94.7523" y1="82.0246" x2="8.40951" y2="52.0609" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.06"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_111:606" x1="90.3206" y1="58.4236" x2="1.16149" y2="50.8365" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.06"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span>
                        <span class="absolute right-0 bottom-0 rotate-180 z-[-1]"><svg width="132" height="109" viewBox="0 0 132 109" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z" fill="url(#paint0_linear_111:606)"></path><path opacity="0.5" d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z" fill="url(#paint1_linear_111:606)"></path><defs><linearGradient id="paint0_linear_111:606" x1="94.7523" y1="82.0246" x2="8.40951" y2="52.0609" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.06"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_111:606" x1="90.3206" y1="58.4236" x2="1.16149" y2="50.8365" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.06"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span>
                        
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt utionals labore et dolore magna aliqua. 
                        Quis lobortis scelerisque fermentum, The Neque ut etiam sit amet.
                    </div>
                    <p className="text-xl my-5 text-(--textcolor-secound)">consectetur adipiscing elit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate cupidatat.</p>
                    <div className="flex justify-between flex-wrap gap-5">
                        <div className="left flex flex-col">
                            <h1 className="text-[16px] text-(--textcolor-secound)">Popular Tags :</h1>
                        <div className="flex gap-5">
                            <button className='bg-(--heroBtn-bg) transition duration-300 text-(--textcolor-main) hover:bg-(--color-main) p-2 text-[12px] m-auto'>Design</button>
                        <button className='bg-(--heroBtn-bg) transition duration-300 text-(--textcolor-main) hover:bg-(--color-main) p-2 text-[12px] m-auto'>Development</button>
                        <button className='bg-(--heroBtn-bg) transition duration-300 text-(--textcolor-main) hover:bg-(--color-main) p-2 text-[12px] m-auto'>Info</button>
                        </div>
                        </div>
                        <div className="right flex flex-col ">
                            <h1 className="text-[16px] text-(--textcolor-secound)">Share this post :</h1>
                        <div className="flex gap-5">
                        <button className='bg-(--heroBtn-bg) transition duration-300 text-(--textcolor-main) hover:bg-(--color-main) p-2 text-[18px] m-auto'><AiFillLinkedin /></button>
                        <button className='bg-(--heroBtn-bg) transition duration-300 text-(--textcolor-main) hover:bg-(--color-main) p-2 text-[18px] m-auto'><AiFillInstagram /></button>
                        <button className='bg-(--heroBtn-bg) transition duration-300 text-(--textcolor-main) hover:bg-(--color-main) p-2 text-[18px] m-auto'><AiFillGithub /></button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetails