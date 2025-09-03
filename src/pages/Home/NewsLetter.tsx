import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import newsletter from "../../assets/images/newsletter.png";

const NewsLetter: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <section className=" py-16 flex justify-center items-center">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Image with overlay text */}
        <div className="relative">
          <img src={newsletter} alt="Newsletter" className="w-30 h-30 object-contain" />
          <span className="absolute inset-0 flex justify-center items-center text-title sm:text-[22px] md:text-[48px] font-bold font-high-empathy mb-2 text-primary">
            Subscribe
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[35px] font-bold text-gray-800">Join Our Newsletter</h1>

        {/* Email input with send button */}
        <div className="flex items-center bg-white w-full">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-4 py-2 focus:outline-none border-b-2 text-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="text-title p-3  text-primary">
            <FaPaperPlane size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
