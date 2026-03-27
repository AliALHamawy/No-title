import { useState } from 'react'
import './Blogs.css'
import BlogsInf from './BlogsInfo'
import { Link } from 'react-router'

function Blogs(props) {
  const [blog, setBlog] = useState(BlogsInf)
  return (
    <>
      <div className={`blogs py-5 ${props.className || ''}`}>
        <div className="cont px-4 my-20">
          <div className={`top max-w-[570px]  m-auto text-center ${props.abcde|| 'hidden'}`}>
            <h1 className='text-(--textcolor-main) text-3xl sm:text-5xl bd:text-5xl lg:text-5xl font-bold mb-7 leading-10 sm:leading-16 md:leading-16 lg:leading-16'>Our Latest Blogs</h1>
            <p className='text-xl text-(--textcolor-secound) mb-10'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
          </div>
          <div className="bottom max-w-[1500px] m-auto flex gap-6 flex-wrap justify-center">
            {blog.map((item) => (
              <div className="card max-w-[434.69px] bg-(--card-bg)" key={item.id}>
                <img src={item.imagePath} alt=""className='w-[100%]' />
                <div className='p-8'>
                  <Link className='text-[24px] text-(--textcolor-main) font-bold'>{item.title}</Link>
                  <p className='text-[16px] text-(--textcolor-secound) my-4 pb-4 border-b border-(--border)'>{item.subTitle}</p>
                  <div className='flex'>
                    <div className="left flex justify-center">
                      <img src={item.avatar} alt="" className='mr-3 w-[50px] h-[50px]'/>
                      <div>
                        <h1 className='text-[14px] text-(--textcolor-main)'>{item.name}</h1>
                        <p className='text-[12px] text-(--textcolor-secound)'>{item.jop}</p>
                      </div>
                    </div>
                    <div className="right border-l border-(--border) ml-4 px-4">
                      <h1 className='text-[14px] text-(--textcolor-main)'>Date</h1>
                      <p className='text-[12px] text-(--textcolor-secound)'>2025</p>
                    </div>
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

export default Blogs