import { useState } from 'react'
import './Pricing.css'
import price from './price'
import FeatureIcon from './FeatureIcon'

function Pricing() {
  const [info, setInfo] = useState(price)
  const [isMonthly, setIsMonthly] = useState(true)

  const toggleBilling = () => {
    setIsMonthly(!isMonthly)
  }

  return (
    <>
      <div className="pricing pt-30 pb-5 px-4 relative">
        <svg className='absolute left-0' width="239" height="601" viewBox="0 0 239 601" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect opacity="0.3" x="-184.451" y="600.973" width="196" height="541.607" rx="2" transform="rotate(-128.7 -184.451 600.973)" fill="url(#paint0_linear_93:235)"></rect>
          <rect opacity="0.3" x="-188.201" y="385.272" width="59.7544" height="541.607" rx="2" transform="rotate(-128.7 -188.201 385.272)" fill="url(#paint1_linear_93:235)"></rect>
          <defs>
            <linearGradient id="paint0_linear_93:235" x1="-90.1184" y1="420.414" x2="-90.1184" y2="1131.65" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear_93:235" x1="-159.441" y1="204.714" x2="-159.441" y2="915.952" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
        <div className="cont max-w-[1500px] m-auto ">
          <div className='max-w-[570px] m-auto text-center'>
            <h1 className='text-(--textcolor-main) text-3xl sm:text-5xl bd:text-5xl lg:text-5xl font-bold mb-7 leading-10 sm:leading-16 md:leading-16 lg:leading-16'>Simple and Affordable Pricing</h1>
            <p className='text-xl text-(--textcolor-secound) mb-10'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
          </div>
          <div className="flex justify-center gap-3">
            <h1 className={`text-xl cursor-pointer ${isMonthly ? 'text-(--color-main)' : 'text-(--textcolor-main)'}`} onClick={() => setIsMonthly(true)}>Monthly</h1>
            <div className="flex cursor-pointer items-center" onClick={toggleBilling}>
              <div className="relative m-auto">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div className={`shadow-switch-1 absolute top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-(--color-main) transition-all duration-300 ${isMonthly ? 'left-0' : 'left-7'}`}>
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <h1 className={`text-xl cursor-pointer ${!isMonthly ? 'text-(--color-main)' : 'text-(--textcolor-main)'}`} onClick={() => setIsMonthly(false)}>Yearly</h1>
          </div>
          <div className="cards flex justify-center flex-wrap gap-10 my-10">
            {info.map((item) => (
              <div className="card w-[368px] flex flex-col bg-(--bg-secound) p-6 md:p-8 lg:p-8 relative" key={item.id}>
                <svg className="absolute bottom-0 right-0" width="179" height="158" viewBox="0 0 179 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z" fill="url(#paint0_linear_70:153)"></path>
                  <path opacity="0.3" d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z" fill="url(#paint1_linear_70:153)"></path>
                  <defs>
                    <linearGradient id="paint0_linear_70:153" x1="69.6694" y1="29.9033" x2="196.108" y2="83.2919" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4A6CF7" stop-opacity="0.62"></stop>
                      <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_70:153" x1="165.348" y1="-75.4466" x2="-3.75136" y2="103.645" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#4A6CF7" stop-opacity="0.62"></stop>
                      <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex justify-between">
                  <div className='text-3xl text-(--textcolor-main) font-black'>
                    {isMonthly ? item.month : item.year}
                    <span className='text-(--textcolor-secound)'>{isMonthly ? item.mo : item.yr}</span>
                  </div>
                  <div className='text-2xl text-(--textcolor-main)'>{item.tybe}</div>
                </div>
                <div className='my-2 text-(--textcolor-secound) font-bold'>Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.</div>
                <button className='bg-(--color-main) text-xl font-black text-(--textcolor-main) p-3 my-4'>Start Free Trial</button>
                <div className='flex flex-col gap-4 mt-6 pt-6 border-t border-(--border)'>
                  <div className='flex gap-3 text-center items-center'>
                    <FeatureIcon isIncluded={item.features.allComponents} />
                    <p className='text-(--textcolor-secound)'>All UI Components</p>
                  </div>
                  <div className='flex gap-3 text-center items-center'>
                    <FeatureIcon isIncluded={item.features.unlimitedProjects} />
                    <p className='text-(--textcolor-secound)'>Use with Unlimited Projects</p>
                  </div>
                  <div className='flex gap-3 text-center items-center'>
                    <FeatureIcon isIncluded={item.features.commercialUse} />
                    <p className='text-(--textcolor-secound)'>Commercial Use</p>
                  </div>
                  <div className='flex gap-3 text-center items-center'>
                    <FeatureIcon isIncluded={item.features.emailSupport} />
                    <p className='text-(--textcolor-secound)'>Email Support</p>
                  </div>
                  <div className='flex gap-3 text-center items-center'>
                    <FeatureIcon isIncluded={item.features.lifetimeAccess} />
                    <p className='text-(--textcolor-secound)'>Lifetime Access</p>
                  </div>
                  <div className='flex gap-3 text-center items-center'>
                    <FeatureIcon isIncluded={item.features.freeLifetimeUpdates} />
                    <p className='text-(--textcolor-secound)'>Free Lifetime Updates</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing