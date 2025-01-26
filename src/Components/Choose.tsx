// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { client } from "@/sanity/client";
// import Link from "next/link";

// function Choose() {
//   const qurey = `*[_type == 'chef']{
//     _id,
//       name,
//        "imageUrl": image.asset->url
//     }[0...4]`;
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const getData = async () => {
//       const res = await client.fetch(qurey);
//       setData(res);
//     };
//     getData();
//   }, [qurey]);
//   return (
//     <div className="bg-black">
//       <Image
//         className="mx-auto"
//         src="/Choose & pick.png"
//         alt=""
//         width={150}
//         height={200}
//       />
//       <h1 className="font-bold text-[48px] text-white pt-4 pb-4 text-center">
//         <span className="text-yellow-500">Me</span>et Our Chef
//       </h1>
//       <div className="lg:grid lg:grid-cols-4 lg:gap-6">
//         {data.map((item: any) => (
//           <div key={item._id} className="p-4">
//             <Link href={`/${item._id}`}>
//               <Image
//                 className="p-2 mx-auto transform transition-transform duration-200 ease-in-out hover:scale-105"
//                 src={item.imageUrl}
//                 alt=""
//                 width={300}
//                 height={600}
//               />
//               <h2 className="text-white text-xl text-center mt-2">{item.name}</h2>
//             </Link>
//           </div>
//         ))}
//       </div>
//       <div className=" text-center mt-10 pb-20">
//         <button className="text-white border border-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition">
//           See More
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Choose;
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/client";
import Link from "next/link";

// Define the type for Chef data
interface Chef {
  _id: string;
  name: string;
  imageUrl: string;
}

function Choose() {
  const query = `*[_type == 'chef']{
    _id,
    name,
    "imageUrl": image.asset->url
  }[0...4]`;

  // State with a specific type
  const [data, setData] = useState<Chef[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await client.fetch<Chef[]>(query); // Fetch with type annotation
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [query]); // Dependency array doesn't include `query`

  return (
    <div className="bg-black">
      <Image
        className="mx-auto"
        src="/Choose & pick.png"
        alt="Choose and Pick"
        width={150}
        height={200}
      />
      <h1 className="font-bold text-[48px] text-white pt-4 pb-4 text-center">
        <span className="text-yellow-500">Me</span>et Our Chef
      </h1>
      <div className="lg:grid lg:grid-cols-4 lg:gap-6">
        {data.map((item) => (
          <div key={item._id} className="p-4">
            <Link href={`/${item._id}`}>
              <Image
                className="p-2 mx-auto transform transition-transform duration-200 ease-in-out hover:scale-105"
                src={item.imageUrl}
                alt={`Image of ${item.name}`}
                width={300}
                height={600}
              />
              <h2 className="text-white text-xl text-center mt-2">{item.name}</h2>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 pb-20">
        <button className="text-white border border-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition">
          See More
        </button>
      </div>
    </div>
  );
}

export default Choose;
