import React, { useState } from "react";

import img1 from "../../assets/images/section2-1.jpg"
import img2 from "../../assets/images/section2-2.jpg"
import img3 from "../../assets/images/section2-3.jpg"
import candle from "../../assets/images/H1_BG_1.png"





const SectionTwo: React.FC = () => {
return (

<section className="flex items-center py-12">
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Card 1 */}
        <div className="flex flex-col relative group overflow-hidden cursor-pointer">
            <div>
                <img src={candle} alt="candle"
                    className="size-[150px]"/>
            </div>
            <div>
                <h3 className="text-title sm:text-[22px] md:text-[48px]">Olars Categories</h3>
                <p className="size-[250px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Tempor incididunt ut labore…</p>

            </div>
        </div>


        {/* Card 2 */}
        <div className="relative group overflow-hidden cursor-pointer">
            <div>
            <img src={img3} alt="Category 1"
                className="w-50 h-50 object-cover rounded-full border-radius-50" />
            </div>

            <div className="">
                <h2 className="text-title sm:text-[22px] md:text-[48px] font-bold font-high-empathy mb-2 text-primary">
                   Candles</h2>
                <button
                    className="flex items-center gap-2 text-secondary text-button  font-weight-600 px-4 py-2 hover:text-primary transition-colors duration-300">
                    Shop Now <span className="text-lg sm:text-x">→</span>
                </button>
            </div>
        </div>
     

         {/* Card 3 */}
         <div className="relative group overflow-hidden cursor-pointer">
            <div>
            <img src={img2} alt="Category 1"
                className="w-50 h-50 object-cover rounded-full border-radius-50" />
            </div>

            <div className="">
                <h2 className="text-title sm:text-[22px] md:text-[48px] font-bold font-high-empathy mb-2 text-primary">
                   Accessories</h2>
                <button
                    className="flex items-center gap-2 text-secondary text-button  font-weight-600 px-4 py-2 hover:text-primary transition-colors duration-300">
                    Shop Now <span className="text-lg sm:text-x">→</span>
                </button>
            </div>
        </div>

          {/* Card 4 */}
          <div className="relative group overflow-hidden cursor-pointer">
            <div>
            <img src={img1} alt="Category 1"
                className="w-90 h-70 object-cover rounded-full border-radius-50" />
            </div>

            <div className="">
                <h2 className="text-title sm:text-[22px] md:text-[48px] font-bold font-high-empathy mb-2 text-primary">
                   Gift Sets</h2>
                <button
                    className="flex items-center gap-2 text-secondary text-button  font-weight-600 px-4 py-2 hover:text-primary transition-colors duration-300">
                    Shop Now <span className="text-lg sm:text-x">→</span>
                </button>
            </div>
        </div>
         
    </div>
</section>
);
};

export default SectionTwo;
