import React from 'react'
import AvTimerIcon from '@mui/icons-material/AvTimer';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <div className='px-20  bg-black mx-auto md:flex justify-between items-center pb-32'>
      <div className=''>
        <h1 className='font-bold text-2xl text-white pt-4 pb-4'>About us</h1>
        <p className='text-white pb-4 w-60'>orporate clients and leisure travelers has
been relying  <br />on Groundlink for dependab <br />
safe, and professional chauffeured car
service in major <br />cities across World.</p>
<div className='flex items-center gap-4'>
    <div className='text-white '><AvTimerIcon className='bg-yellow-500'/></div>
    <div className='text-white'>Opening Houres <br />
Mon - Sat(8.00 - 6.00) <br />
Sunday - Closed</div>
</div>
      </div>
<div className='text-white'>
<h1 className='font-bold text-2xl text-white pt-4 pb-4'>Useful Links</h1>
<div className='flex flex-col gap-3'>
<div>  

<Link className='' href="/">About</Link>    <br />
    
      </div>
<div>
<Link className='' href="/">News</Link> <br />

        </div>
<div>
<Link className='' href="/">Partners</Link> <br />
        </div>
<div>
<Link className='' href="/">Team</Link> <br />
        </div>
<div>
<Link className='' href="/">Menu</Link> <br />

        </div>
        <div>

<Link className='' href="/">MContact</Link>
        </div>

</div>
</div>
<div className='flex flex-col gap-3 text-white'>
<h1 className='font-bold text-2xl text-white pt-4 pb-4'>Help?</h1>
<div>  

<Link className='' href="/">FAQ</Link>    <br />
    
      </div>
<div>
<Link className='' href="/">Terms And Condition</Link> <br />

        </div>
<div>
<Link className='' href="/">Reporting</Link> <br />
        </div>
<div>
<Link className='' href="/">Documentation</Link> <br />
        </div>
<div>
<Link className='' href="/">Support Policy</Link> <br />

        </div>
        <div>

<Link className='' href="/">Privacy</Link>
        </div>

</div>

<div>
<h1 className='font-bold text-2xl text-white pt-4 pb-4'>Recent Post</h1>
<Image src="/Resent post cadr 1.png" alt=' ' width={200} height={200}/>
<Image src="/Resent post cadr 2.png" alt=' ' width={200} height={200}/>
<Image src="/Resent post cadr 3.png" alt=' ' width={200} height={200}/>

</div>

    </div>
  )
}

export default Footer
