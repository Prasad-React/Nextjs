"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import menuData from "@/data/menu.json"; 
import colors from '../styles/colors';

export default function TransportPage() {
  const slides = menuData.slides; 
  const [current, setCurrent] = useState(0);
   

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };




  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="" style={{ backgroundColor: colors.customBlue[300], color: '', }}>
    <div className="container relative max-w-10xl mx-auto mt-0 overflow-hidden  rounded-2xl shadow-lg">
      {/* Slide */}
      <div className=" px-4 relative h-[500px] flex items-center justify-center bg-gray-100"   >
        <Image
          src={slides[current].image}
          alt={slides[current].title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-6">
          <h2 className="text-3xl font-bold mb-3">{slides[current].title}</h2>
          <p className="max-w-xl">{slides[current].description}</p>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}       
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ▶
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
    </div>
  );
}
