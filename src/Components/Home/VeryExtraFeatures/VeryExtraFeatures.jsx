import './VeryExtraFeatures.css'

function VeryExtraFeatures() {
    return (
        <div className="veryExtraFeatures max-w-[1400px]  flex flex-col lg:flex-row gap-10 justify-between items-center py-10 m-auto px-2">
            <div className="left max-w-[600px] ">
                <img src="/assets/images/about/about-image-2-dark.svg" alt="" className='w-[320px] md:min-w-[464px] lg:min-w-[464px]' />

            </div>
            <div className="Right max-w-[550px] flex flex-col text-left m-auto gap-5">
                <div className='flex flex-col gap-2'>

                <h1 className='text-3xl text-(--textcolor-main)'>Bug free code</h1>
                <p className='text-xl text-(--textcolor-secound)'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='flex flex-col gap-2'>

                <h1 className='text-3xl text-(--textcolor-main)'>Premier support</h1>
                <p className='text-xl text-(--textcolor-secound)'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className='flex flex-col gap-2'>

                <h1 className='text-3xl text-(--textcolor-main)'>Next.js</h1>
                <p className='text-xl text-(--textcolor-secound)'>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt consectetur adipiscing elit setim.</p>
                </div>
            </div>
        </div>
    )
}

export default VeryExtraFeatures