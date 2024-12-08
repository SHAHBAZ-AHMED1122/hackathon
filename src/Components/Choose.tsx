import React from 'react'
import Image from 'next/image'

function Choose() {
  return (
    <div className='bg-black'>
        <Image className='mx-auto' src="/Choose & pick.png" alt='' width={150} height={200}/>
        <h1 className="font-bold text-[48px] text-white pt-4 pb-4 text-center">
            <span className="text-yellow-500">Me</span>et Our Chef
          </h1> 
          <div className='xl:flex justify-center'>
            <div className='lg:flex justify-center'>

            <div>
            <Image className='p-2 mx-auto' src="/Chef card.png" alt='' width={300} height={600}/>
            </div>
            <div>
            <Image className='p-2  mx-auto' src="/card 2.png" alt='' width={300} height={600}/>
            </div>
            </div>
            <div className='lg:flex justify-center'>
            <div>
            <Image className='p-2  mx-auto' src="/card 3.png" alt='' width={300} height={600}/>
            </div>
            <div>
            <Image className='p-2  mx-auto' src="/card 4.png" alt='' width={300} height={600}/>
            </div>
            </div>
          </div>
          <div className=' text-center mt-10 pb-20'>
          <button className='text-white border border-yellow-500 px-8 py-4 rounded-full '>See More</button>

          </div>
    </div>
  )
}

export default Choose
