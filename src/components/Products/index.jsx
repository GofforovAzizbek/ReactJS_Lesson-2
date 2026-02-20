import React from "react";
import { FaShoppingCart, FaSearch, FaHeart, FaSyncAlt } from "react-icons/fa";

const Products = [
  {
    id: 1,
    name: "Magic Mouse",
    price: 249.99,
    oldPrice: 249.99,
    discount: "10%",
    rating: 5,
    colors: ["#ffffff", "#000000", "#1E90FF"],
    image: "https://via.placeholder.com/150?text=Mouse"
  },
  {
    id: 2,
    name: "Black iPhone Speaker",
    price: 249.99,
    oldPrice: 249.99,
    discount: "20%",
    rating: 5,
    colors: [],
    image: "https://via.placeholder.com/150?text=Speaker"
  },
  {
    id: 3,
    name: "iOS Keyboard",
    price: 249.99,
    oldPrice: 249.99,
    discount: "50%",
    rating: 4,
    colors: [],
    image: "https://via.placeholder.com/150?text=Keyboard"
  },
  {
    id: 4,
    name: "Mackbook Pro",
    price: 2049.99,
    oldPrice: 2499.99,
    discount: "50%",
    rating: 4,
    colors: [],
    image: "https://via.placeholder.com/150?text=Laptop"
  },
  {
    id: 5,
    name: "Black Headphone",
    price: 249.99,
    oldPrice: 249.99,
    discount: "50%",
    rating: 4.5,
    colors: [],
    image: "https://via.placeholder.com/150?text=Headphone"
  },
  {
    id: 6,
    name: "iPhone Speaker",
    price: 249.99,
    oldPrice: 249.99,
    discount: "50%",
    rating: 4.5,
    colors: [],
    image: "https://via.placeholder.com/150?text=iPhone+Speaker"
  }
];

const Card = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-xl font-bold mb-8">Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className="text-sm mb-2">Get up to {product.discount} off Today Only!</div>
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
            <h3 className="font-bold mb-2">{product.name}</h3>
            <div className="flex items-center mb-2">
              <span className="text-red-500 font-bold mr-2">${product.price}</span>
              <span className="line-through text-gray-400">${product.oldPrice}</span>
            </div>
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={`text-yellow-400 ${i + 0.5 <= product.rating ? "fas fa-star" : "far fa-star"}`}>
                  ★
                </span>
              ))}
            </div>
            <div className="flex space-x-2 mb-4">
              {product.colors.map((color, idx) => (
                <span key={idx} className="w-5 h-5 rounded-full border" style={{ backgroundColor: color }}></span>
              ))}
            </div>
            <div className="flex justify-between text-gray-600">
              <FaShoppingCart className="cursor-pointer hover:text-black" />
              <FaSearch className="cursor-pointer hover:text-black" />
              <FaHeart className="cursor-pointer hover:text-black" />
              <FaSyncAlt className="cursor-pointer hover:text-black" />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="text-blue-500 hover:underline font-semibold">
          VIEW ALL →
        </button>
      </div>
    </div>
  );
};

export default Products;