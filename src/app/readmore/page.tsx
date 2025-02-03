// import React from "react";

// export default function About() {
//   return (
//     <div className="bg-gray-50 text-gray-800 min-h-screen">
//       {/* Header */}
//       <header className="bg-blue-500 text-white py-6">
//         <div className="container mx-auto px-6 flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Q-Commerce</h1>
//           <nav>
//             <a href="/" className="text-white hover:underline mx-3">Home</a>
//             <a href="/about" className="text-white hover:underline mx-3">About Us</a>
//           </nav>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="py-10">
//         <div className="container mx-auto px-6">
//           {/* Hero Section */}
//           <section className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold mb-4 text-blue-500">About Us</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Welcome to Q-Commerce, your go-to platform for ultra-fast and reliable shopping.
//               We’re dedicated to bringing you convenience, speed, and quality all in one place.
//             </p>
//           </section>

//           {/* Mission and Vision */}
//           <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-2xl font-semibold mb-2 text-blue-500">Our Mission</h3>
//               <p className="text-gray-600">
//                 To revolutionize the way people shop by offering instant access to daily essentials
//                 through cutting-edge technology and unparalleled customer service.
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-2xl font-semibold mb-2 text-blue-500">Our Vision</h3>
//               <p className="text-gray-600">
//                 To become the global leader in quick commerce, setting a new standard for speed
//                 and reliability in online shopping.
//               </p>
//             </div>
//           </section>

//           {/* Values Section */}
//           <section className="mb-16">
//             <h3 className="text-2xl font-semibold text-center mb-8 text-blue-500">Our Core Values</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//                 <h4 className="text-lg font-bold mb-2 text-blue-500">Customer Focus</h4>
//                 <p className="text-gray-600">Your satisfaction drives everything we do.</p>
//               </div>
//               <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//                 <h4 className="text-lg font-bold mb-2 text-blue-500">Innovation</h4>
//                 <p className="text-gray-600">We constantly seek new ways to improve and grow.</p>
//               </div>
//               <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//                 <h4 className="text-lg font-bold mb-2 text-blue-500">Speed</h4>
//                 <p className="text-gray-600">Fast delivery is our promise to you.</p>
//               </div>
//             </div>
//           </section>

//           {/* Call to Action */}
//           <section className="text-center">
//             <h3 className="text-2xl font-semibold mb-4 text-blue-500">Ready to Shop?</h3>
//             <p className="text-gray-600 mb-6">Experience the future of shopping with Q-Commerce. Fast, reliable, and effortless.</p>
//             <a href="/" className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-600 transition">
//               Start Shopping
//             </a>
//           </section>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="container mx-auto px-6 text-center">
//           <p>&copy; 2025 Q-Commerce. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }


import React from "react";

export const metadata = {
  title: "more about us",
};

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="bg-yellow-500 text-black py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Food<span className="text-white">tuck</span> </h1>
          <nav>
            <a href="/" className="text-black hover:underline mx-3">Home</a>
            <a href="/about" className="text-black hover:underline mx-3">About Us</a>
          </nav>
        </div>
      </header>

      <main className="py-10">
        <div className="container mx-auto px-6">
          <section className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-yellow-500">About Us</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Welcome to Q-Commerce, your go-to platform for ultra-fast and reliable shopping.
              We’re dedicated to bringing you convenience, speed, and quality all in one place.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white text-black shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2 text-yellow-500">Our Mission</h3>
              <p className="text-gray-700">
                To revolutionize the way people shop by offering instant access to daily essentials
                through cutting-edge technology and unparalleled customer service.
              </p>
            </div>
            <div className="bg-white text-black shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2 text-yellow-500">Our Vision</h3>
              <p className="text-gray-700">
                To become the global leader in quick commerce, setting a new standard for speed
                and reliability in online shopping.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-yellow-500">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white text-black shadow-lg rounded-lg p-6 text-center">
                <h4 className="text-lg font-bold mb-2 text-yellow-500">Customer Focus</h4>
                <p className="text-gray-700">Your satisfaction drives everything we do.</p>
              </div>
              <div className="bg-white text-black shadow-lg rounded-lg p-6 text-center">
                <h4 className="text-lg font-bold mb-2 text-yellow-500">Innovation</h4>
                <p className="text-gray-700">We constantly seek new ways to improve and grow.</p>
              </div>
              <div className="bg-white text-black shadow-lg rounded-lg p-6 text-center">
                <h4 className="text-lg font-bold mb-2 text-yellow-500">Speed</h4>
                <p className="text-gray-700">Fast delivery is our promise to you.</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Ready to Shop?</h3>
            <p className="text-gray-300 mb-6">Experience the future of shopping with Q-Commerce. Fast, reliable, and effortless.</p>
            <a href="/" className="bg-yellow-500 text-black px-8 py-3 rounded-lg shadow hover:bg-yellow-600 transition">
              Start Shopping
            </a>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Q-Commerce. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
