import Feedback from '@/Components/Feedback'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

function page() {
  return (
    <div className='bg-black'>
        <Header/>
        <div className='pt-20 px-20'>

      <Feedback/>
        </div>
    <Footer/>
    </div>

  )
}

export default page
