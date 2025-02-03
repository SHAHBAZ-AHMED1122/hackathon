import Why from '@/Components/Why'
import React from 'react'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'

export const metadata = {
  title: "Shop",
};

function page() {
  return (
    <div className='bg-black'>
        <Header/>
        <div className='px-20'>
      <Why/>

        </div>
      <Footer/>
    </div>
  )
}

export default page
