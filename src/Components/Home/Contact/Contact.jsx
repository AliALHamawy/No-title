import './Contact.css'

function Contact() {
  return (
    <>
    <div className="contact bg-(--bg-secound) pb-15">

      <div className="contact flex flex-wrap justify-center p-4 max-w-[1500px] m-auto gap-10 ">
        <div className="py-10 left lg:w-[901.33px] min-h-[617px] flex flex-col bg-(--card-bg)">
          <div className="cont flex flex-col w-[90%] m-auto justify-between">

          <div className='flex flex-col mb-10'>
            <h1 className='text-3xl text-(--textcolor-main)'>Need Help? Open a Ticket</h1>
            <p className='text-(--textcolor-secound)'>Our support team will get back to you ASAP via email.</p>
          </div>
          <div className="flex justify-between abc">
            <div className='flex flex-col w-[47%] bcd'>
              <label className='my-3 text-xl text-(--textcolor-main)' htmlFor="name">Your Name</label>
              <input placeholder='Enter Your Name' className='text-(--textcolor-secound) px-3 outline-0 transition-all duration-300 focus:border border-(--color-main) h-[50px]  bg-(--input-bg)' type="text" name="" id="name" />
            </div>
            <div className='flex flex-col w-[47%] bcd'>
              <label className='my-3 text-xl text-(--textcolor-main)' htmlFor="email">Your Email</label>
              <input placeholder='Enter Your Email' className='text-(--textcolor-secound) px-3 outline-0 transition-all duration-300 focus:border border-(--color-main) h-[50px] bg-(--input-bg)' type="email" name="" id="email" />
            </div>
          </div>
            <div className='flex flex-col w-[100%]'>
              <label className='my-3 text-xl text-(--textcolor-main)' htmlFor="message">Your Message</label>
              <textarea placeholder='Enter Your Message' className='text-(--textcolor-secound) resize-none p-3 outline-0 transition-all duration-300 focus:border border-(--color-main) bg-(--input-bg) h-[146px]' type="text" name="" id="message" />
            </div>
            <button className='h-[56px] w-[175.13px] bg-(--color-main) text-xl text-(--textcolor-main) transition-all duration-300 hover:bg-(--hcolor-main) mt-5'>Submit Ticket</button>
          </div>
        </div>
        <div className="right w-[434.66px] min-h-[617px] bg-(--card-bg) p-10 flex flex-col gap-4 ">
          <div className="fex flex-col border-b border-(--border) pb-10 flex flex-col gap-4">
            <h1 className='text-2xl text-(--textcolor-main) font-bold'>Subscribe to receive future updates</h1>
            <p className='text-(--textcolor-secound)'>Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.</p>
          </div>
          <input placeholder='Enter Your Name' className='text-(--textcolor-secound) mt-10 px-3 outline-0 transition-all duration-300 focus:border border-(--color-main) h-[50px] w-[100%] bg-(--input-bg)' type="text" name="" id="name" />
          <input placeholder='Enter Your Email' className='text-(--textcolor-secound) px-3 outline-0 transition-all duration-300 focus:border border-(--color-main) h-[50px] w-[100%] bg-(--input-bg)' type="text" name="" id="name" />
            <button className='h-[56px] w-[100%] bg-(--color-main) text-xl text-(--textcolor-main) transition-all duration-300 hover:bg-(--hcolor-main) mt-5'>Submit Ticket</button>
            <p className='text-center mt-3 text-(--textcolor-secound)'>No spam guaranteed, So please don’t send any spam mail.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact