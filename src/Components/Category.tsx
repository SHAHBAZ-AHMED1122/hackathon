import React from 'react'
import Image from 'next/image'

function Category() {
  return (
    <div className='bg-black'>
        <div >
      <Image 
      className=' mx-auto pt-40'
            src="/Food Category.png"
            alt="quick"
            width={150}
            height={100}/>
            </div>
            <h1 className="font-bold text-[48px] text-white pt-4 pb-4 text-center">
            <span className="text-yellow-500">Ch</span>oose Food Item<br />
          </h1> 
<div className=' xl:flex justify-center' >
    <div className='md:flex justify-center'>

    
   <div>
   <Image 
      className='p-3 mx-auto'
            src="/one.png"
            alt="quick"
            width={300}
            height={800}/>
    </div> 
   <div>
   <Image 
      className='p-3 mx-auto'
            src="/two.png"
            alt="quick"
            width={300}
            height={800}/>
    </div> 
    </div>
    <div className='md:flex justify-center'>

    
   <div>
   <Image 
      className='p-3 mx-auto'
            src="/three.png"
            alt="quick"
            width={300}
            height={800}/>
    </div> 
   <div>
   <Image 
      className='p-3 mx-auto'
            src="/four.png"
            alt="quick"
            width={300}
            height={800}/>
    </div> 
    </div>
</div>
    </div>
  )
}

export default Category
