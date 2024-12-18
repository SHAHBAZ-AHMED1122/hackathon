import React from 'react'
import Image from 'next/image'

function Latest() {
  return (
    <div className='bg-black'>
      <Image className='text-center mx-auto'
            src="/Blog Post.png"
            alt="quick"
            width={100}
            height={100}/>
            <h1 className="font-bold text-[48px] text-white pt-4 pb-4 text-center">
            <span className="text-yellow-500">La</span>test News & Blog<br />
          </h1> 
          <div className='flex justify-center cursor-pointer pb-20'>

          <div>
            <Image className='p-1' src="/Blog Card 1.png" alt='' width={400} height={400}/>
          </div>
          <div>
            <Image className='p-1' src="/Blog Card 2.png" alt='' width={400} height={400}/>
          </div>
          <div>
            <Image className='p-1' src="/Blog Card 3.png" alt='' width={400} height={400}/>
          </div>
          </div>
          <div className='flex flex-col  md:flex md:flex-row md:items-center justify-between  border-b border-yellow-500 pb-20'>

          <div>
          <h1 className="text-4xl sm:text-[48px] font-bold  text-white pt-4 pb-4 ">
            <span className="text-yellow-500">St</span>ill you need our support<br />
          </h1> 
          <p className='text-white'>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
          </div>
          <div className='flex items-center'>
<div>
            <input className='p-2 bg-yellow-400 text-white rounded-sm' type="text" placeholder='Enter your Email' />
</div>
            <div>
            <span className='text-yellow-500 rounded-sm bg-white pt-[11px] pb-[11px] '>subscribe</span>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Latest
