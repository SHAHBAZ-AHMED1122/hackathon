import React from 'react'
import Image from 'next/image'

function Feedback() {
  return (
    <div className='bg-black'>
        <Image  src="/Group 1000002250.png" alt='' width={100} height={200}/>
        <h1 className='text-white font-bold text-[48px]'>What our client  are saying</h1>
      <div className= 'mx-auto max-w-[700px] bg-white'>
      <Image className='mx-auto  mt-20' src="/Text.png" alt='' width={600} height={200}/>
      </div>
      <div>
      <Image className='mx-auto  mt-32 pb-10' src="/Restraind creative Process.png" alt='' width={1918} height={558}/>
        
      </div>
    </div>
  )
}

export default Feedback
