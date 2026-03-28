import { BsGithub } from "react-icons/bs";
import './SignIn.css'
import BackgroundSVG from '../SignUp/BackgroundSVG'
import { Link } from "react-router";
import { useState } from "react";


function SignIn() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <BackgroundSVG />
      <div className="signUp flex mt-18 p-4">
        <div className="cont max-w-[500px] m-auto bg-(--bg-secound) p-10 my-10">
          <div className="flex flex-col m-auto justify-center gap-5 mt-10 items-center text-center">

            <h1 className="text-2xl md:text-3xl lg:text-3xl text-(--textcolor-main) font-black">Sign in to your account</h1>
            <p className="text-[15px] md:text-[16px] lg:text-[16px] text-(--textcolor-secound)">Login to your account for a faster checkout.</p>
            <button className='flex p-4 items-center cursor-pointer text-(--textcolor-secound) text-[16px] mt-6  transition-all duration-300 border-(--input-bg) hover:text-(--color-main) hover:bg-(--color-asdsd) border hover:border-(--color-main)  bg-(--input-bg) w-full text-center justify-center'><span class="mr-3"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_95:967)"><path d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216" fill="#4285F4"></path><path d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001" fill="#34A853"></path><path d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z" fill="#FBBC05"></path><path d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z" fill="#EB4335"></path></g><defs><clipPath id="clip0_95:967"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg></span>Sign in with Google</button>
            <button className='flex p-4 items-center cursor-pointer text-(--textcolor-secound) text-[16px] mb-4 transition-all duration-300 border-(--input-bg) hover:text-(--color-main) hover:bg-(--color-asdsd) border hover:border-(--color-main)  bg-(--input-bg) w-full text-center justify-center'><BsGithub class="mr-3" />Sign in with GitHub</button>
          </div>
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-(--border)"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-(--bg-secound) text-(--textcolor-secound) text-[12px] md:text-[14px] lg:text-[14px]">
                Or, sign in with your email
              </span>
            </div>
          </div>
          <form action="" className="flex flex-col ">
            <div className="flex flex-col">
              <label className="text-[16px] text-(--textcolor-main) mb-2" htmlFor="name">Full Name</label>
              <input className="p-2 bg-(--input-bg) text-(--textcolor-secound) outline-0 h-[45px] border border-(--input-bg) focus:border-(--color-main) mb-5 " type="text" name="" id="name" placeholder="Enter your Full Name" />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-(--textcolor-main) mb-2" htmlFor="email">Email</label>
              <input className="p-2 bg-(--input-bg) text-(--textcolor-secound) outline-0 h-[45px] border border-(--input-bg) focus:border-(--color-main) mb-5 " type="email" name="" id="email" placeholder="Enter your Email" />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] text-(--textcolor-main) mb-2" htmlFor="password">Password</label>
              <input className="p-2 bg-(--input-bg) text-(--textcolor-secound) outline-0 h-[45px] border border-(--input-bg) focus:border-(--color-main) mb-5 " type="password" name="" id="password" placeholder="Enter your Password" />
            </div>

            <div className="flex gap-2 items-center justify-between">
              <div className="flex items-center">

                <span
                  className="border border-(--border) rounded-[3px] w-6 h-6 flex justify-center items-center text-center cursor-pointer"
                  onClick={() => setIsChecked(!isChecked)}
                >
                  {isChecked && (
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="currentColor" className="text-(--color-main)">
                      <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"></path>
                    </svg>
                  )}
                </span>
                {/* Added hidden checkbox for form submission */}
                <input
                  type="checkbox"
                  id="terms"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="hidden"
                />
                <p className="text-[12px] md:text-[14px] lg:text-[14px] text-(--textcolor-secound) ml-2" onClick={() => setIsChecked(!isChecked)}>
                  Keep me signed in
                </p>
            </div>
                <p className="text-[12px] md:text-[14px] lg:text-[14px] text-(--color-main)">Forgot Password?</p>
              </div>

              <button className='h-[56px] w-[100%] cursor-pointer bg-(--color-main) text-xl text-(--hero-btntext) transition-all duration-300 hover:bg-(--hcolor-main) my-5'>Sign In</button>
            <p className="text-center text-(--textcolor-secound)">Already using Startup? <Link to="/SignUp" className="text-(--color-main)">Sign Up</Link></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn