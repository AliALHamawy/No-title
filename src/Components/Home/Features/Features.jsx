import { useState } from 'react'
import './Features.css'
import Info from './FeaturesInfo.jsx'

function Features() {
  const [feature, setFeature] = useState(Info)
  return (
    <div className="features pt-[95.97px] bg-(--bg-main) mb-10">
      <div className="cont flex text-center flex-col m-auto">
        <div className='max-w-[570px] m-auto'>
          <h1 className='text-(--textcolor-main) text-3xl sm:text-5xl bd:text-5xl lg:text-5xl font-bold mb-7 leading-10 sm:leading-16 md:leading-16 lg:leading-16'>Main Features</h1>
          <p className='text-xl text-(--textcolor-secound) mb-10'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        </div>
        <div className="stuff flex flex-wrap gap-7 max-w-[1368px] m-auto mb-20">
          {feature.map((item) =>(
            <div key={item.id} className='flex flex-col text-left max-w-[380px] m-auto'>
              <div  className='text-(--color-main) bg-(--bg-main) w-[75px] h-[75px] flex align-middle items-center justify-center text-center rounded-md mb-3'>{item.ico}</div>
              <h1 className='text-[25px] font-bold text-(--textcolor-main)'>{item.title}</h1>
              <p className='text-[17px] font-medium text-(--textcolor-secound)'>{item.subTitle}</p>
            </div>
          ))}
          </div>
      </div>
    </div>
  )
}

export default Features