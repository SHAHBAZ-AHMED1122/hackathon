import About from '@/Components/About'
import Category from '@/Components/Category'
import Choose from '@/Components/Choose'
import Feedback from '@/Components/Feedback'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Home from '@/Components/Home'
import Latest from '@/Components/Latest'
import Why from '@/Components/Why'
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
      <Footer />
    </div>
  )
}

export default page
