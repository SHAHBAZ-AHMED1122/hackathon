"use client";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";




interface ChefFields {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  imageUrl: string;
  description: string;
  available: boolean;
}

interface Params {
  chefid: string;
}

export default function ChefDetailPage({ params }: { params: Params }) {
  const [data, setData] = useState<ChefFields | null>(null);
  const [loading, setLoading] = useState(true);
const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true); // Start loading
      try {
        const query = `*[_type == "chef" && _id == $id][0]{
          _id,
          name,
          experience,
          specialty,
          description,
          available,
          position,
          "imageUrl": image.asset->url,
        }`;

        const res: ChefFields = await client.fetch(query, { id: params.chefid });
        setData(res || null);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    getData();
  }, [params.chefid]);

  console.log("Params:", params);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-red-500">
          Chef data not found. Please try again!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-white text-black p-4 md:p-6 shadow-md">
  <div className="container mx-auto flex flex-wrap justify-between items-center">
    {/* Logo or Title */}
    <h1 className="text-2xl md:text-3xl font-bold text-yellow-500">Chef Details</h1>

    {/* Hamburger Menu for small screens */}
    <button
      className="block md:hidden text-gray-700 focus:outline-none"
      aria-label="Toggle Menu"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>

    {/* Navigation */}
    <nav
      className={`${
        isMenuOpen ? "block" : "hidden"
      } w-full md:flex md:items-center md:w-auto mt-4 md:mt-0`}
    >
      <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
        <li>
          <a
            href="/"
            className="hover:text-yellow-500 text-gray-800 text-lg md:text-base"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="hover:text-yellow-500 text-gray-800 text-lg md:text-base"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="hover:text-yellow-500 text-gray-800 text-lg md:text-base"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>


      {/* Main Section */}
      <main className="container mx-auto p-4 sm:p-6">
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
          {/* Chef Image */}
          <div className="chef-image md:w-1/2 flex justify-center">
            {data.imageUrl && (
              <Image
                src={data.imageUrl}
                alt={data.name}
                width={300}
                height={300}
                className="rounded-lg border-4 border-yellow-500"
              />
            )}
          </div>

          {/* Chef Details */}
          <div className="chef-details md:w-1/2 md:pl-8 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">{data.name}</h2>
            <p className="text-lg text-gray-600 mb-2">Position: {data.position}</p>
            <p className="text-lg text-gray-600 mb-2">Expert in: {data.specialty}</p>
            <p className="text-xl font-semibold text-yellow-500 mb-4">
              Experience: {data.experience} years
            </p>
            <p className="text-gray-700 mb-6">{data.description}</p>
            {/* Contact Info */}
            <div className="contact bg-yellow-500 text-white p-4 rounded-md">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Contact Chef {data.name}
              </h3>
              <p className="mt-2">For inquiries or bookings, please reach out via email:</p>
              <p className="font-medium mt-2 break-words">
                chef.{data.name}@culinaryworld.com
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-800 text-center py-6 mt-12 shadow-md">
        <div className="container mx-auto">
          <p className="text-lg font-medium">
            Follow {data.name} on social media
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-yellow-500 hover:text-yellow-600">
              Instagram
            </a>
            <a href="#" className="text-yellow-500 hover:text-yellow-600">
              Twitter
            </a>
            <a href="#" className="text-yellow-500 hover:text-yellow-600">
              Facebook
            </a>
          </div>
          <p className="text-sm mt-4">&copy; 2025 {data.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
