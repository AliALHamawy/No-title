import { AiFillLinkedin } from "react-icons/ai"; 
import { AiFillGithub } from "react-icons/ai"; 
import { AiFillInstagram } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
import './Footer.css'
import { Link } from "react-router";

function Footer() {
  return (
    <>
    <footer className="bg-(--bg-secound)">
      <svg className="absolute translate-y-30" width="79" height="94" viewBox="0 0 79 94" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.3" x="-41" y="26.9426" width="66.6675" height="66.6675" transform="rotate(-22.9007 -41 26.9426)" fill="url(#paint0_linear_94:889)"></rect><rect x="-41" y="26.9426" width="66.6675" height="66.6675" transform="rotate(-22.9007 -41 26.9426)" stroke="url(#paint1_linear_94:889)" stroke-width="0.7"></rect><path opacity="0.3" d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z" fill="url(#paint2_linear_94:889)"></path><path d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z" stroke="url(#paint3_linear_94:889)" stroke-width="0.7"></path><path opacity="0.3" d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z" fill="url(#paint4_linear_94:889)"></path><path d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z" stroke="url(#paint5_linear_94:889)" stroke-width="0.7"></path><defs><linearGradient id="paint0_linear_94:889" x1="-41" y1="21.8445" x2="36.9671" y2="59.8878" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0.62"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_94:889" x1="25.6675" y1="95.9631" x2="-42.9608" y2="20.668" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0.51"></stop></linearGradient><linearGradient id="paint2_linear_94:889" x1="20.325" y1="-3.98039" x2="90.6248" y2="25.1062" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0.62"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint3_linear_94:889" x1="18.3642" y1="-1.59742" x2="113.9" y2="80.6826" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0.51"></stop></linearGradient><linearGradient id="paint4_linear_94:889" x1="61.1098" y1="62.3249" x2="-8.82468" y2="58.2156" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0.62"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint5_linear_94:889" x1="65.4236" y1="65.0701" x2="24.0178" y2="41.6598" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0.51"></stop></linearGradient></defs></svg>
      <svg className="absolute right-0 rotate-180 translate-y-3" width="79" height="94" viewBox="0 0 79 94" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.3" x="-41" y="26.9426" width="66.6675" height="66.6675" transform="rotate(-22.9007 -41 26.9426)" fill="url(#paint0_linear_94:889)"></rect><rect x="-41" y="26.9426" width="66.6675" height="66.6675" transform="rotate(-22.9007 -41 26.9426)" stroke="url(#paint1_linear_94:889)" stroke-width="0.7"></rect><path opacity="0.3" d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z" fill="url(#paint2_linear_94:889)"></path><path d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z" stroke="url(#paint3_linear_94:889)" stroke-width="0.7"></path><path opacity="0.3" d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z" fill="url(#paint4_linear_94:889)"></path><path d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z" stroke="url(#paint5_linear_94:889)" stroke-width="0.7"></path><defs><linearGradient id="paint0_linear_94:889" x1="-41" y1="21.8445" x2="36.9671" y2="59.8878" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0.62"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_94:889" x1="25.6675" y1="95.9631" x2="-42.9608" y2="20.668" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0.51"></stop></linearGradient><linearGradient id="paint2_linear_94:889" x1="20.325" y1="-3.98039" x2="90.6248" y2="25.1062" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0.62"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint3_linear_94:889" x1="18.3642" y1="-1.59742" x2="113.9" y2="80.6826" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0.51"></stop></linearGradient><linearGradient id="paint4_linear_94:889" x1="61.1098" y1="62.3249" x2="-8.82468" y2="58.2156" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0.62"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint5_linear_94:889" x1="65.4236" y1="65.0701" x2="24.0178" y2="41.6598" gradientUnits="userSpaceOnUse"><stop stop-color="#4A6CF7" stop-opacity="0"></stop><stop offset="1" stop-color="#4A6CF7" stop-opacity="0.51"></stop></linearGradient></defs></svg>
      <div className="z-30 top flex justify-between max-w-[1500px] m-auto py-20 px-4 flex-wrap gap-5 border-b border-(--border) pb-10">
        <div className="left flex flex-col max-w-[360px] gap-7">
              <img src="/assets/images/logo/logo.svg" alt="" className="max-w-[185px]"/>
              <p className="text-(--textcolor-secound)">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.</p>
              <div className="flex gap-4 text-(--textcolor-secound) text-xl"><BsFacebook /><AiFillInstagram /><AiFillGithub /><AiFillLinkedin /></div>
        </div>
        <div className="right flex justify-between gap-14 flex-wrap items-center align-middle m-auto">
          <div className="flex flex-col gap-5">
            <h1 className="text-xl text-(--textcolor-main)">Useful Links</h1>
            <ul className="flex min-w-[150px] flex-col gap-4 text-(--textcolor-secound)">
              <Link className="transition-all duration-300 hover:text-(--color-main)">Blog</Link>
              <Link className="transition-all duration-300 hover:text-(--color-main)">Pricing</Link>
              <Link className="transition-all duration-300 hover:text-(--color-main)">About</Link>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl text-(--textcolor-main)">Terms</h1>
            <ul className="flex min-w-[150px] flex-col gap-4 text-(--textcolor-secound)">
              <Link className="transition-all duration-300 hover:text-(--color-main)">TOS</Link>
              <Link className="transition-all duration-300 hover:text-(--color-main)">Privacy Policy</Link>
              <Link className="transition-all duration-300 hover:text-(--color-main)">Refund Policy</Link>
            </ul>

          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl text-(--textcolor-main)">Support & Help</h1>
            <ul className="flex min-w-[150px] flex-col gap-4 text-(--textcolor-secound)">
              <Link className="transition-all duration-300 hover:text-(--color-main)">Open Support Ticket</Link>
              <Link className="transition-all duration-300 hover:text-(--color-main)">Terms of Use</Link>
              <Link className="transition-all duration-300 hover:text-(--color-main)">About</Link>
            </ul>

          </div>
        </div>
      </div>
      <div className="bottom py-5 text-(--textcolor-secound) px-4 text-center text-[14px] lg:text-xl md:text-xl">Template by UIdeck and Next.js Templates. Distributed by ThemeWagon</div>
    </footer>
    </>
  )
}

export default Footer