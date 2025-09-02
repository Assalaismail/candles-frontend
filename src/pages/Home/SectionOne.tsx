import React, { useState } from "react";

import img1 from "../../assets/images/section1-1.jpg"
import img2 from "../../assets/images/section1-2.jpg"
import img3 from "../../assets/images/section1-3.jpg"


const SectionOne: React.FC = () => {
return (
<section className="w-full py-12">
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="relative group overflow-hidden cursor-pointer">
            <img src={img1} alt="Category 1"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute top-0 right-0 p-6 bg-gradient-to-t to-transparent text-white">
                <h2 className="text-title sm:text-[22px] md:text-[48px] font-bold font-high-empathy mb-2 text-primary">Spring Collection</h2>
                <p className="text-description text-secondary mb-4"></p>
                <button
                    className="flex items-center gap-2 text-secondary text-button  font-weight-600 px-4 py-2 hover:text-primary transition-colors duration-300">
                    Shop Now <span className="text-lg sm:text-x">→</span>
                </button>
            </div>
        </div>

        {/* Card 2 */}
        <div className="relative group overflow-hidden cursor-pointer">
            <img src={img3} alt="Category 3"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div
                className="absolute top-0 left-0 right-0 p-6 flex flex-col items-center justify-start bg-gradient-to-b from-black/50 to-transparent text-center">
                <h2 className="text-title font-high-empathy text-primary font-bold mb-2">Autumn story</h2>
                <p className="text-secondary mb-4 text-description">Up To 40% Off</p>
                <button
                    className="flex items-center gap-2 text-secondary text-button font-weight-600 px-4 py-2 hover:text-primary transition-colors duration-300">
                    Shop Now <span className="text-xl">→</span>
                </button>
            </div>
        </div>

        {/* Card 3 */}
        <div className="relative group overflow-hidden cursor-pointer">
            <img src={img2} alt="Category 2"
                className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-t to-transparent text-white">
                <h2 className="text-title font-bold font-high-empathy mb-2 text-primary">Special</h2>
                <p className="text-description text-secondary mb-4">Gift Of Nature</p>
                <button
                    className="flex items-center gap-2 text-secondary text-button font-weight-600 px-4 py-2 hover:text-primary transition-colors duration-300">
                    Shop Now <span className="text-xl">→</span>
                </button>
            </div>
        </div>

    </div>
</section>

);
};

export default SectionOne;
