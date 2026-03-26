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
      <div className="top flex justify-between max-w-[1500px] m-auto py-10 px-4 flex-wrap gap-5 border-b border-(--border) pb-10">
        <div className="left flex flex-col max-w-[360px] gap-5">
              <img src="/assets/images/logo/logo.svg" alt="" className="max-w-[185px]"/>
              <p className="text-(--textcolor-secound)">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.</p>
              <div className="flex gap-4 text-(--textcolor-secound) text-xl"><BsFacebook /><AiFillInstagram /><AiFillGithub /><AiFillLinkedin /></div>
        </div>
        <div className="right flex justify-between gap-10 flex-wrap items-center align-middle m-auto">
          <div className="flex flex-col gap-5">
            <h1 className="text-xl text-(--textcolor-main)">Useful Links</h1>
            <ul className="flex min-w-[150px] flex-col gap-4 text-(--textcolor-secound)">
              <Link>Blog</Link>
              <Link>Pricing</Link>
              <Link>About</Link>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl text-(--textcolor-main)">Terms</h1>
            <ul className="flex min-w-[150px] flex-col gap-4 text-(--textcolor-secound)">
              <Link>TOS</Link>
              <Link>Privacy Policy</Link>
              <Link>Refund Policy</Link>
            </ul>

          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl text-(--textcolor-main)">Support & Help</h1>
            <ul className="flex min-w-[150px] flex-col gap-4 text-(--textcolor-secound)">
              <Link>Open Support Ticket</Link>
              <Link>Terms of Use</Link>
              <Link>About</Link>
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