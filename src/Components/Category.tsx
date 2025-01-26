// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { client } from "@/sanity/client";
// import Link from "next/link";
// function Category() {
//   const qurey = `*[_type == 'food']{
//   _id,
//     name,
//      "imageUrl": image.asset->url
//   }`;
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const getData = async () => {
//       const res = await client.fetch(qurey);
//       setData(res);
//     };
//     getData();
//   }, []);
//   return (
//     <div className="bg-black">
//       <div>
//         <Image
//           className=" mx-auto pt-40"
//           src="/Food Category.png"
//           alt="quick"
//           width={150}
//           height={100}
//         />
//       </div>
//       <h1 className="font-bold text-[48px] text-white pt-4 pb-4 text-center">
//         <span className="text-yellow-500">Ch</span>oose Food Item
//         <br />
//       </h1>
//       <div className="md:grid md:grid-cols-3 md:gap-6">
//         {data.map((ele: any) => (
//           <div key={ele._id}>
//             <Link href={`/menu/${ele._id}`}>
//               <Image
//                 className="p-3 mx-auto"
//                 src={ele.imageUrl}
//                 alt="quick"
//                 width={300}
//                 height={800}
//               />
//               <h1 className="text-white text-xl mt-2 text-center">{ele.name}</h1>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Category;



"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/client";
import Link from "next/link";

function Category() {
  const query = `*[_type == 'food']{
    _id,
    name,
    "imageUrl": image.asset->url
  }`;
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await client.fetch(query);
      setData(res);
    };
    getData();
  }, [query]);

  return (
    <div className="bg-black">
      <div>
        <Image
          className="mx-auto pt-20 sm:pt-40"
          src="/Food Category.png"
          alt="quick"
          width={150}
          height={100}
        />
      </div>
      <h1 className="font-bold text-3xl sm:text-4xl md:text-[48px] text-white pt-4 pb-4 text-center">
        <span className="text-yellow-500">Ch</span>oose Food Item
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-8 md:px-12">
        {data.map((ele: any) => (
          <div key={ele._id}>
            <Link href={`/menu/${ele._id}`}>
              <Image
                className="p-3 mx-auto transform transition-transform duration-200 ease-in-out hover:scale-105"
                src={ele.imageUrl}
                alt="quick"
                width={300}
                height={800}
              />
              <h1 className="text-white text-lg sm:text-xl mt-2 text-center">
                {ele.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
