"use client"
import Image from 'next/image';

export default function ChefDetailPage() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <header className="bg-white text-black p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-yellow-500">Chef Details</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-yellow-500">Home</a></li>
              <li><a href="#" className="hover:text-yellow-500">About</a></li>
              <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
          {/* Chef Image */}
          <div className="chef-image md:w-1/2 mb-6 md:mb-0">
            <Image 
              src="/chef-profile.jpg" // You can replace this with the actual image path
              alt="Chef Name"
              width={400}
              height={400}
              className="rounded-full border-4 border-yellow-500"
            />
          </div>

          {/* Chef Details */}
          <div className="chef-details md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Chef John Doe</h2>
            <p className="text-lg text-gray-600 mb-2">Expert in: French & Italian Cuisine</p>
            <p className="text-xl font-semibold text-yellow-500 mb-4">Experience: 15+ Years</p>
            <p className="text-gray-700 mb-6">
              Chef John Doe is a renowned culinary artist known for his exquisite skills in French and Italian cuisine. With over 15 years of experience, Chef John has worked at several Michelin-starred restaurants and continues to innovate in the kitchen with passion and precision.
            </p>

            {/* Specialties */}
            <div className="specialties mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Specialties</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Classic French Dishes</li>
                <li>Authentic Italian Pastas</li>
                <li>Seasonal and Local Ingredients</li>
                <li>Modern Fusion Cooking</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="contact bg-yellow-500 text-white p-4 rounded-md">
              <h3 className="text-2xl font-semibold">Contact Chef John Doe</h3>
              <p className="mt-2">For inquiries or bookings, please reach out via email:</p>
              <p className="font-medium mt-2">chef.johndoe@culinaryworld.com</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white text-gray-800 text-center py-6 mt-12 shadow-md">
        <div className="container mx-auto">
          <p className="text-lg font-medium">Follow Chef John Doe on social media</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-yellow-500 hover:text-yellow-600">Instagram</a>
            <a href="#" className="text-yellow-500 hover:text-yellow-600">Twitter</a>
            <a href="#" className="text-yellow-500 hover:text-yellow-600">Facebook</a>
          </div>
          <p className="text-sm mt-4">&copy; 2025 Chef John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
