import React from 'react'
import Image from 'next/image'

function Why() {
  return (
    <div className='bg-black pt-40'>
      <div className='xl:flex justify-between'>

      
      <div >

      
      <div className='flex '>

      <div className='w-[362px] p-1 flex'>
        <Image className='transform transition-transform duration-200 ease-in-out hover:scale-105' src="/b1.png" alt='burgur' width={362} height={356}/>
        </div>
      <div className=' w-[362px]    p-1 '>
        <Image className='pt-20 transform transition-transform duration-200 ease-in-out hover:scale-105' src="/b2.png" alt='burgur' width={281} height={231}/>
        </div>
      </div>
      <div className='flex'>
      <div className='w-[244px]  p-1  '>
        <Image className='transform transition-transform duration-200 ease-in-out hover:scale-105' src="/b3.png" alt='burgur' width={244} height={306}/>
        </div>
      <div className='w-[244px]  p-1  '>
        <Image className='transform transition-transform duration-200 ease-in-out hover:scale-105' src="/b4.png" alt='burgur' width={221} height={226}/>
        </div>
        <div>
        <Image className='p-1 transform transition-transform duration-200 ease-in-out hover:scale-105'  src="/b5.png" alt='burgur' width={161} height={168}/>
        <Image className='p-1 transform transition-transform duration-200 ease-in-out hover:scale-105' src="/b6.png" alt='burgur' width={161} height={166}/>

        </div>

      </div>
</div>
<div>
<Image
            src="/Why Choose us.png"
            alt="quick"
            width={100}
            height={100}
            className="pt-4"
          />
          <h1 className="font-bold text-[30px] text-white mt-4 mb-4">
            <span className="text-yellow-500">Ex</span>tra ordinary taste <br />
            And Experienced
          </h1>
          <p className="text-white font-thin pt-4 pb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, aut. <br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, obcaecati! <br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, unde. <br />
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, libero!         
          
          </p>
          <div className='flex justify-center gap-4 mt-4 mb-4'>

          
          <div>
            <Image className='bg-yellow-500 rounded-md transform transition-transform duration-200 ease-in-out hover:scale-105' src="/Hamburger.png" alt='' width={80} height={100}/>
            <h1 className='text-white pt-1'>Fast Food</h1>
          </div>
          <div>
            <Image className='bg-yellow-500 rounded-md transform transition-transform duration-200 ease-in-out hover:scale-105' src="/Cookie.png" alt='' width={80} height={100}/>
            <h1 className='text-white pt-1 text-center'>Lunch</h1>
          </div>
          <div>
            <Image className='bg-yellow-500 rounded-md transform transition-transform duration-200 ease-in-out hover:scale-105' src="/Wine.png" alt='' width={80} height={100}/>
            <h1 className='text-white pt-1 text-center'>Wine</h1>
          </div>
          </div>
<div >
  <Image className='mx-auto pt-4 pb-4' src="/ex.png" alt='' width={200} height={200}/>
</div>

</div>


</div>
<div>
<Image className='mx-auto pt-32 pb-32 cursor-pointer' src="/Icon Box.png" alt='' width={1000} height={800}/>
</div>
    </div>
  )
}

export default Why
