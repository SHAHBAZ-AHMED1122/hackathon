import About from '@/components/About'
import Category from '@/components/Category'
import Choose from '@/components/Choose'
import Feedback from '@/components/Feedback'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Home from '@/components/Home'
import Latest from '@/components/Latest'
import Why from '@/components/Why'
import React from 'react'

function page() {
  return (
    <div className='px-20 bg-black'>
      <Header/>
      <Home/>
      <About/>
      <Category/>
      <Why/>
      <Choose/>
      <Feedback/>
      <Latest/>
      <Footer/>
    </div>
  )
}

export default page
