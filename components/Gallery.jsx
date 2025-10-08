"use client";

import React from 'react';
import menuData from '@/data/menu.json';

function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {menuData.gallery?.map((section, index) => (
        <div key={index} className="mb-12">
          {/* Section Header */}
          {section.header && (
            <div>
              <h1 className="text-4xl font-bold text-center text-gray-800 mb-6  pb-2">
              {section.heading}
            </h1>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              {section.header}
            </h3>
            </div>
          )}

          {/* Image Grid */}
          <div className="grid gap-8  sm:grid-cols-2  lg:grid-cols-3">
            {section.img1?.map((image, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt || `Gallery image ${idx + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
