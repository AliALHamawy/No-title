import './Hero.css'

function Hero() {
  return (
    <>
      <div className="hero bg-(--bg-main) h-[751px] pt-[95.97px]">
        <img src="/assets/images/hero/shape-01.svg" alt="" className='aaa' />
        <img src="/assets/images/hero/shape-02.svg" alt="" className='bbb' />
        <div className="cont w-[350px] sm:w-[540px] md:w-[800px] lg:w-[800px] flex flex-col text-center m-auto mt-30  absolute left-[50%] -translate-x-[50%]">
          <h1 className='text-(--textcolor-main) text-3xl sm:text-5xl bd:text-5xl lg:text-5xl font-bold mb-7 leading-10 sm:leading-16 md:leading-16 lg:leading-16'>Free and Open-Source Next.js Template for Startup & SaaS</h1>
          <p className='text-xl text-(--textcolor-secound) mb-10'>Startup is free Next.js template for startups and SaaS business websites comes with all the essential pages, components,
            and sections you need to launch a complete business website, built-with Next 13.x and Tailwind CSS.</p>
            <button className='bg-(--heroBtn-bg) hover:bg-(--heroBtn-hbg) transition duration-300 text-(--textcolor-main) h-[56px] w-[177px] m-auto'>Star on GitHub</button>
        </div>
      </div>
    </>
  )
}

export default Hero