import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiSun } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import './Header.css'
import { Link } from 'react-router'
import { useState, useRef } from "react";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
    if (window.innerWidth > 1100) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setIsDropdownOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth > 1100) {
      timeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false)
      }, 300) // 300ms delay عشان يمديك تروح على القائمة
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleMobileDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsMobileDropdownOpen(!isMobileDropdownOpen)
  }

  return (
    <>
      <nav className="header bg-(--hbg-main) fixed top-0 left-0 w-[100vw] m-auto p-6 text-(--textcolor-secound) ">
        <div className="cont max-w-[1400px] m-auto flex justify-between items-center gap-14 -translate-x-3">
          <div className="left min-w-[164.47px] mr-10">
            <div className="logo">
              <img src="/assets/images/logo/logo.svg" alt="" />
            </div>
          </div>
          <div className="right max-w-[1150px] flex justify-between gap-10">
            <div className="links flex justify-between w-[100%]">
              <ul className={`flex justify-between main ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="px-2 active:text-(--textcolor-main) hover:text-(--textcolor-main) text-center w-[90px] flex justify-between items-center">Home</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/About" className="px-2 active:text-(--textcolor-main) hover:text-(--textcolor-main) text-center w-[90px] flex justify-between items-center">About</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/Blog" className="px-2 active:text-(--textcolor-main) hover:text-(--textcolor-main) text-center w-[90px] flex justify-between items-center">Blog</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} to="/Contact" className="px-2 active:text-(--textcolor-main) hover:text-(--textcolor-main) text-center w-[90px] flex justify-between items-center">Support</Link>
                <Link
                  className="px-2 active:text-(--textcolor-main) hover:text-(--textcolor-main) text-center w-[90px] flex justify-between items-center more"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={toggleMobileDropdown}
                >
                  Pages <BiChevronDown />
                </Link>
                <ul
                  className={`absolute top-0 translate-y-17.5 bg-(--bg-secound) flex flex-col gap-3 text-[17px] w-[260px] p-4 mobile-ul ${isDropdownOpen || isMobileDropdownOpen ? 'show' : 'hidden'}`} 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link onClick={() => setIsMobileMenuOpen(false)} to="/About" className="px-2 text-(--textxcolor-secound) hover:text-(--textcolor-main) text-left ">About Page</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} to="/Contact" className="px-2 text-(--textxcolor-secound) hover:text-(--textcolor-main) text-left ">Contact Page</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} to="/Blogs" className="px-2 text-(--textxcolor-secound) hover:text-(--textcolor-main) text-left ">Blog Grid Page</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} to="/BlogSidebar" className="px-2 text-(--textxcolor-secound) hover:text-(--textcolor-main) text-left ">Blog SidePar Page</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} to="/BlogDetails" className="px-2 text-(--textxcolor-secound) hover:text-(--textcolor-main) text-left ">Blog Details Page</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} to="/SignUp" className="px-2 text-(--textxcolor-secound) hover:text-(--textcolor-main) text-left ">Sign Up Page</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} to="/SignIn" className="px-2 text-(--textxcolor-secound) hover:text-(--textcolor-main) text-left ">Sign In Page</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} to="/Error" className="px-2 text-(--textxcolor-secound) hover:text-(--textcolor-main) text-left ">Error Page</Link>
                </ul>
              </ul>
              <div className="buttons flex justify-between gap-10 items-center ">
                <button className="text-(--textcolor-main) hover:text-(--textcolor-secound)">Sign In</button>
                <button className="text-(--textcolor-main) bg-(--color-main) h-12 w-33 hover:bg-(--hcolor-main)">Sign Up</button>
                <BiSun className="active:text-(--textcolor-main) hover:text-(--textcolor-main) text-3xl" />
                {!isMobileMenuOpen ? (
                  <AiOutlineMenu onClick={toggleMobileMenu} className="menu text-3xl cursor-pointer" />

                ) : (
                  <AiOutlineClose onClick={toggleMobileMenu} className="menu text-3xl cursor-pointer" />

                )
                }
              </div>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={toggleMobileMenu}></div>
        )}
      </nav>
    </>
  )
}

export default Header