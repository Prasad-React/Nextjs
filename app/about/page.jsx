"use client";
import React from 'react';
import menuData from "@/data/menu.json";

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {menuData.aboutus?.map((item, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{item.title}</h2>
          {item.content?.map((info, idx) => (
            <p key={idx} className="text-gray-700 mb-3">
              {info.text}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default AboutPage;

