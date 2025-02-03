
import Category from '@/Components/Category'
import React from 'react'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
export const metadata = {
  title: "Menu",
};

function page() {
  return (
    <div className='bg-black '>
        <Header/>
        <div className='px-20'>

      <Category/>
        </div>
      <div className='pt-20 '>

      <Footer/>
      </div>
    </div>
  )
}

export default page
