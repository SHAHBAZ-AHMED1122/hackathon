// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { client } from "@/sanity/client";
// export const fetchAndMigrateData = async () => {
//   const res = await fetch("https://sanity-nextjs-rouge.vercel.app/api/chefs");
//   const  data  = await res.json();
//   for (const {
//     name,
//     position,
//     experience,
//     specialty,
//     image,
//     description,
//     available
//    } of data) {
//     try {
//       const imageAsset = await uploadImageToSanity(image);
//       await client.create({
//         _type: 'chef',
//         name,
//         position,
//         experience,
//         specialty,
//         image:{
//           _type: 'image',
//           asset: {
//             _type: 'reference',
//             _ref: imageAsset._id,
//           }
//         },
//         description,
//         available
//       });
//       console.log(`Migrated product: ${name}`);
//     } catch (error:any) {
//       console.log(`Failed to migrate product: ${name} - Error: ${error.message}`);
//     }
//   }
// };

// const uploadImageToSanity = async (imageUrl: string) => {
//   const res = await fetch(imageUrl);
//   if (!res.ok) {
//     throw new Error(`Failed to fetch image: ${imageUrl} - Status: ${res.status}`);
//   }
//   const contentType = res.headers.get("content-type") || "image/jpeg";
//   const imageAsset = await client.assets.upload('image', res.body as any , {
//     filename: imageUrl.split('/').pop() || "image",
//     contentType,
//   });
//   return imageAsset;
// };