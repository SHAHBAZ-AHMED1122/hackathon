import Latest from '@/Components/Latest'
import React from 'react'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'

export const metadata = {
  title: "Blogs",
};


function page() {
  return (
    <div className='bg-black'>
        <Header/>
        <div className='pt-20 px-20'>
      <Latest/>

        </div>
      <Footer/>
    </div>
  )
}

export default page
