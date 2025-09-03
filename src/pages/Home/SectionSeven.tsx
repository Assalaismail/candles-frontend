import React, { useState } from "react";

import img1 from "../../assets/images/gallery_01.jpg";
import img2 from "../../assets/images/gallery_02.jpg";
import img3 from "../../assets/images/gallery_03.jpg";
import img4 from "../../assets/images/gallery_04.jpg";
import img5 from "../../assets/images/gallery_05.jpg";
import img6 from "../../assets/images/gallery_06.jpg";
import img7 from "../../assets/images/gallery_07.jpg";
import img8 from "../../assets/images/gallery_08.jpg";

const SectionSeven: React.FC = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full flex items-center">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {images.map((img, index) => {
          // Change this direction class to see different effects
          // Options: "translate-y-full", "-translate-y-full", "translate-x-full", "-translate-x-full"
          const directionClass =
            index % 4 === 0
              ? "-translate-y-full" // from top
              : index % 4 === 1
              ? "translate-y-full" // from bottom
              : index % 4 === 2
              ? "-translate-x-full" // from left
              : "translate-x-full"; // from right

          return (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Hover overlay */}
              <div
                className={`
                  absolute inset-0 bg-black bg-opacity-50
                  transform ${directionClass} group-hover:translate-x-0 group-hover:translate-y-0
                  transition-transform duration-500 ease-in-out
                  flex items-center justify-center
                `}
              >
                <span className="text-white text-lg font-medium">
                  View Image
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-full max-h-[90vh] object-contain"
          />

        </div>
      )}
    </section>
  );
};

export default SectionSeven;
