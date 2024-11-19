import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export function EventGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="bg- p-4 rounded-lg shadow-md">
      {/* <h3 className="text-lg font-semibold mb-4">Gallery</h3> */}
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="flex mt-2 space-x-2">
            {images.slice(1).map((img, index) => (
                <img
                key={index}
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-1/4 h-20 object-cover rounded-lg"
                />
            ))}
        </div>
        {/* Left Arrow */}
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 -left-8 transform -translate-y-1/2 "
        >
          <FaArrowLeft />
        </button>
        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-8 transform -translate-y-1/2 "
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
