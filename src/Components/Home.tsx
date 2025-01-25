import React from "react";
import Image from "next/image";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link"; 

function Home() {
  return (
    <div className="bg-black">
      <div className="lg:flex items-center justify-between pt-20">
        <div>
        <div className="text-white ">

       < FacebookIcon className="mb-5 mt-10 hover:text-yellow-500"/>
       <br />
       < TwitterIcon  className="mb-5  hover:text-yellow-500"/> 
       <Image  className="mb-10 "
            src="/.png"
            alt="quick"
            width={20}
            height={50}/>
            </div>
            
        </div>
        <div className=" p-4 sm:textcenter mx-auto ">
          <Image
            src="/Its Quick & Amusing!.png"
            alt="quick"
            width={200}
            height={300}
            className="pt-4"
          />
          <h1 className="font-bold text-6xl text-white mt-4 mb-4">
            <span className="text-yellow-500">Th</span>e Art of speed <br />{" "}
            food Quality
          </h1>
          <p className="text-white font-thin pt-4 pb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Quidem
            eveniet expedita illum aut, rem sapiente.
          </p>
          <Link href="/menu">
          <button className="bg-yellow-500 px-10 py-4 text-white rounded-full hover:bg-yellow-600 transition">See Menu</button>
          </Link>
        </div>
        <div><Image
            src="/Image.png"
            alt="dish"
            width={700}
            height={700} className=""/></div>
            
      </div>
    </div>
  );
}

export default Home;
