import React from 'react'
import Image from 'next/image'
import CheckIcon from '@mui/icons-material/Check';
import Link from 'next/link';  


function About() {
  return (
    <div>
       <div className="bg-black">
      <div className="lg:flex items-center justify-between pt-20">
        <div className=" p-4 sm:textcenter mx-auto ">
          <Image
            src="/About us.png"
            alt="quick"
            width={100}
            height={100}
            className="pt-4"
          />
          <h1 className="font-bold text-[48px] text-white mt-4 mb-4">
            <span className="text-yellow-500">We</span> Create the best<br />
            foody Product
          </h1>
          <p className="text-white font-thin pt-4 pb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut. <br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, obcaecati! <br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, unde. <br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, libero!         
          
          </p>
<div className='text-white'>
  <div className='flex items-center'>
<div>
    <CheckIcon className='mr-10'/>
</div>
<div>
  <p className='pb-4 pt-4'>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, </p>
</div>
  </div>
  <div className='flex items-center'>
<div>
    <CheckIcon className='mr-10'/>
</div>
<div>
  <p className='pb-4 pt-4'>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, </p>
</div>
  </div>
  <div className='flex items-center'>
<div>
    <CheckIcon className='mr-10'/>
</div>
<div>
  <p className='pb-4 pt-4'>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, </p>
</div>
  </div>
</div>
<Link href="readmore">
          <button className="bg-yellow-500 px-10 py-4 text-white rounded-full  hover:bg-yellow-600 transition">Read More</button>
</Link>
        </div>
<div className='flex flex-col'>

        <div>
          <Image
            src="/unsplash_fdlZBWIP0aM.png"
            alt="dish"
            width={700}
            height={700} className="p-2 transform transition-transform duration-200 ease-in-out hover:scale-105"/>
            </div> 
            <div className='flex'>

        <div>
          <Image
            src="/unsplash_jpkfc5_d-DI.png"
            alt="dish"
            width={350}
            height={350} className="px-1 transform transition-transform duration-200 ease-in-out hover:scale-105"/>
            </div>
        <div>
          <Image
            src="/unsplash_mAQZ3X_8_l0.png"
            alt="dish"
            width={350}
            height={350} className="px-1 transform transition-transform duration-200 ease-in-out hover:scale-105"/>
            </div>
            </div>
            </div>
            
      </div>
    </div>
    </div>
  )
}

export default About
