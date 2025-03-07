"use client"
import { useState } from 'react';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=' px-20 bg-black'>
<div><h1 className='font-bold text-2xl text-yellow-500 text-center pt-10 pb-10'>Food<span className='text-white'>tuck</span></h1></div>
      <header className='flex flex-col sm:flex sm:flex-row items-center justify-between'>
<nav className='text-white' >
      <div className="container mx-auto flex  items-center px-4 py-3">
        <div className="text-lg font-bold">
          
          
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex space-y-2 lg:space-y-0 md:space-x-4`}
        >
          <Link href="/" className="block px-2 py-1 hover:text-yellow-500 ">
          Home
          </Link>
          <Link href="/menu" className="block px-2 py-1  hover:text-yellow-500 ">
          Menu
          </Link>
          <Link href="/blogs" className="block px-2 py-1  hover:text-yellow-500 ">
          Blogs
          </Link>
          <Link href="/pages" className="block px-2 py-1  hover:text-yellow-500 ">
          Pages
          </Link>
          <Link href="/about" className="block px-2 py-1  hover:text-yellow-500 ">
          About
          </Link>
          <Link href="/shop" className="block px-2 py-1  hover:text-yellow-500 ">
          Shop
          </Link>
          <Link href="/contact" className="block px-2 py-1  hover:text-yellow-500 ">
          Contact
          </Link>
          
        </div>
      </div>
    </nav>
    <div className='flex items-center'>
      <div className='p-2 rounded-full bg-black border border-yellow-500 px-4'>
      <input type="text" placeholder='Search....' className='bg-black outline-none text-white'  />
      <SearchIcon className='text-white'/>
      </div>
<div>
      <WorkOutlineIcon className='text-white ml-2'/>
</div>

    </div>
      </header>
    </div>
  )
}

export default Header
