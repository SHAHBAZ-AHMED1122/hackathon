
// "use client"
// import React, { useState } from 'react';

// export default function ProductPage() {
//     const [message, setMessage] = useState("");

//     const handleAddToCart = () => {
//         setMessage("Successfully added to cart!");
//         setTimeout(() => setMessage(""), 2000); // Clear message after 2 seconds
//     };

//     return (
//         <div className="bg-gray-100 text-gray-900 min-h-screen">
//             <header className="bg-white text-black p-6 shadow-md">
//                 <div className="container mx-auto flex justify-between items-center">
//                     <h1 className="text-3xl font-bold text-yellow-500">Q-Commerce</h1>
//                     <nav>
//                         <ul className="flex space-x-6">
//                             <li><a href="#" className="hover:text-yellow-500">Home</a></li>
//                             <li><a href="#" className="hover:text-yellow-500">Shop</a></li>
//                             <li><a href="#" className="hover:text-yellow-500">Cart</a></li>
//                             <li><a href="#" className="hover:text-yellow-500">Account</a></li>
//                         </ul>
//                     </nav>
//                 </div>
//             </header>

//             <main className="container mx-auto p-6">
//                 <section className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
//                     <div className="product-image md:w-1/2 mb-6 md:mb-0">
//                         <img src="/b2.png" alt="Product pic" width={20} height={20} className="rounded-lg w-full" />
//                     </div>
//                     <div className="product-details md:w-1/2 md:pl-8">
//                         <h2 className="text-3xl font-bold mb-4 text-gray-800">Product Name</h2>
//                         <p className="text-lg text-gray-600 mb-2">Type: Product Type</p>
//                         <p className="text-2xl font-semibold text-yellow-500 mb-4">$XX.XX</p>
//                         <p className="text-gray-700 mb-6">
//                             This is a concise description of the product, highlighting its main features and benefits.
//                         </p>
//                         <div className="quantity-selector flex items-center mb-6">
//                             <label htmlFor="quantity" className="mr-4 font-medium">Quantity:</label>
//                             <input 
//                                 type="number" 
//                                 id="quantity" 
//                                 name="quantity" 
//                                 min="1" 
//                                 defaultValue="1" 
//                                 className="border border-gray-300 rounded-md p-2 w-20"
//                             />
//                         </div>
//                         <button 
//                             className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600" 
//                             onClick={handleAddToCart}
//                         >
//                             Add to Cart
//                         </button>
//                         {message && <p className="mt-4 text-green-600 font-medium">{message}</p>}
//                     </div>
//                 </section>
//             </main>

//             <footer className="bg-white text-gray-800 text-center py-6 mt-12 shadow-md">
//                 <div className="container mx-auto">
//                     <p className="text-lg font-medium">Get in touch: support@q-commerce.com</p>
//                     <p className="text-sm">&copy; 2025 Q-Commerce. All rights reserved.</p>
//                 </div>
//             </footer>
//         </div>
//     );
// }



"use client"
import React, { useState } from 'react';

export default function ProductPage() {
    const [message, setMessage] = useState("");

    const product = {
        name: "Delicious Burger",
        category: "Food & Beverages",
        price: "$9.99",
        originalPrice: "$12.99",
        tags: ["burger", "fast food", "meal"],
        image: "/b2.png",
        description: "A juicy and mouth-watering burger made with the finest ingredients. Perfect for satisfying your hunger!",
        available: true,
    };

    const handleAddToCart = () => {
        setMessage("Successfully added to cart!");
        setTimeout(() => setMessage(""), 2000); // Clear message after 2 seconds
    };

    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen">
            <header className="bg-white text-black p-6 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-yellow-500">Q-Commerce</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
                            <li><a href="#" className="hover:text-yellow-500">Shop</a></li>
                            <li><a href="#" className="hover:text-yellow-500">Cart</a></li>
                            <li><a href="#" className="hover:text-yellow-500">Account</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto p-6">
                <section className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
                    <div className="product-image md:w-1/2 mb-6 md:mb-0">
                        <img src={product.image} alt={product.name} className="rounded-lg w-full" />
                    </div>
                    <div className="product-details md:w-1/2 md:pl-8">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h2>
                        <p className="text-lg text-gray-600 mb-2">Category: {product.category}</p>
                        <p className="text-xl text-gray-500 line-through mb-1">{product.originalPrice}</p>
                        <p className="text-2xl font-semibold text-yellow-500 mb-4">{product.price}</p>
                        <p className="text-gray-700 mb-6">{product.description}</p>

                        <div className="quantity-selector flex items-center mb-6">
                            <label htmlFor="quantity" className="mr-4 font-medium">Quantity:</label>
                            <input 
                                type="number" 
                                id="quantity" 
                                name="quantity" 
                                min="1" 
                                defaultValue="1" 
                                className="border border-gray-300 rounded-md p-2 w-20"
                            />
                        </div>
                        <button 
                            className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600 disabled:opacity-50" 
                            onClick={handleAddToCart}
                            disabled={!product.available}
                        >
                            {product.available ? "Add to Cart" : "Out of Stock"}
                        </button>
                        {message && <p className="mt-4 text-green-600 font-medium">{message}</p>}

                        <div className="tags mt-6">
                            <h3 className="font-medium text-gray-700 mb-2">Tags:</h3>
                            <ul className="flex flex-wrap gap-2">
                                {product.tags.map((tag, index) => (
                                    <li key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-white text-gray-800 text-center py-6 mt-12 shadow-md">
                <div className="container mx-auto">
                    <p className="text-lg font-medium">Get in touch: support@q-commerce.com</p>
                    <p className="text-sm">&copy; 2025 Q-Commerce. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
