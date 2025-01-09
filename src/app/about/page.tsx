import About from '@/Components/About'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

function page() {
  return (
    <div className='bg-black'>
        <Header/>
        <div className='px-20'>

      <About/>
        </div>
      <Footer/>
    </div>
  )
}

export default page

