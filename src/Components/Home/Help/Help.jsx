import { AiFillPlayCircle } from "react-icons/ai";
import './Help.css'

function Help() {
    return (
        <>
            <div className="help p-4 mb-30">
                <div className='max-w-[570px] m-auto text-center'>
                    <h1 className='text-(--textcolor-main) text-3xl sm:text-5xl bd:text-5xl lg:text-5xl font-bold mb-7 leading-10 sm:leading-16 md:leading-16 lg:leading-16'>We are ready to help</h1>
                    <p className='text-xl text-(--textcolor-secound) mb-10'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                </div>
                <div className="video flex text-center justify-center  align-middle items-center m-auto">
                    <img src="/assets/images/video/video.jpg" alt="" className="m-auto rounded-md" />
                    <AiFillPlayCircle className="absolute text-5xl md:text-6xl lg:text-6xl flex m-auto text-(--textcolor-main)" />
                </div>
                    <div className="m-auto flex max-w-[1380px] bg-(--bg-secound) py-18 px-20 mt-30 flex-wrap gap-15 lg:gap-20 justify-center">
                        <img src="/assets/images/brands/uideck.svg" alt="" className="grayscale-100 transition-all duration-300 hover:grayscale-0" />
                        <img src="/assets/images/brands/tailgrids.svg" alt="" className="grayscale-100 transition-all duration-300 hover:grayscale-0" />
                        <img src="/assets/images/brands/lineicons.svg" alt="" className="grayscale-100 transition-all duration-300 hover:grayscale-0" />
                        <img src="/assets/images/brands/ayroui.svg" alt="" className="grayscale-100 transition-all duration-300 hover:grayscale-0" />
                        <img src="/assets/images/brands/plainadmin.svg" alt="" className="grayscale-100 transition-all duration-300 hover:grayscale-0" />
                    </div>
            </div>
        </>
    )
}

export default Help