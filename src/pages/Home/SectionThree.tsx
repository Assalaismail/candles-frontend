import React from "react";

import p1 from "../../assets/images/p1.jpg";
import p2 from "../../assets/images/p2.jpg";
import p3 from "../../assets/images/p3.jpg";
import p4 from "../../assets/images/p4.jpg";
import p5 from "../../assets/images/p5.jpg";
import p6 from "../../assets/images/p6.jpg";
import p7 from "../../assets/images/p7.jpg";
import p8 from "../../assets/images/p8.jpg";
import background from "../../assets/images/back5.png";

const products = [
  { id: 1, name: "Gorgeous Wooden Gloves", image: p1, price: "$978.78", rating: 4 },
  { id: 2, name: "Sleek Rubber Wallet", image: p2, price: "$682.48 – $876.73", rating: 4.5 },
  { id: 3, name: "Enormous Wooden Gloves", image: p3, price: "$780.91", oldPrice: "$886.56", rating: 4 },
  { id: 4, name: "Sleek Plastic Car", image: p4, price: "$48.05 – $49.07", rating: 4 },
  { id: 5, name: "Gorgeous Aluminum Table", image: p5, price: "$876.73", rating: 5 },
  { id: 6, name: "Rustic Wooden Plate", image: p6, price: "$120.00", rating: 3 },
  { id: 7, name: "Rustic Wooden Plate", image: p7, price: "$120.00", rating: 3 },
  { id: 8, name: "Rustic Wooden Plate", image: p8, price: "$120.00", rating: 3 },
  { id: 8, name: "Rustic Wooden Plate", image: p8, price: "$120.00", rating: 3 },
];

const SectionThree: React.FC = () => {
    return (
      <section
        className="bg-[#ebeaea] py-12 sm:py-16 lg:py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h4 className="text-sm sm:text-base font-bold text-primary mb-2">New Items</h4>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              Latest Products
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…
            </p>
          </div>
  
          {/* Products Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white transition flex items-center p-4"
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain mr-4"
                />
  
                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base">{product.name}</h3>
                  <div className="text-yellow-500 text-xs sm:text-sm my-1">
                    {"★".repeat(Math.floor(product.rating))}{" "}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-gray-900">
                    {product.price}
                    {product.oldPrice && (
                      <span className="line-through ml-2 text-gray-400 text-xs sm:text-sm">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SectionThree;
