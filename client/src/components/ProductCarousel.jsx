import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProductCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="relative">
      <img src={images[current]} alt="product" className="w-full rounded-lg" />
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"><FiChevronLeft size={24} /></button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"><FiChevronRight size={24} /></button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => <div key={idx} className={`w-2 h-2 rounded-full ${idx === current ? 'bg-white' : 'bg-gray-400'}`}></div>)}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCarousel;