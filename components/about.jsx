"use client";
import React from 'react';
import data from '@/data/menu.json';

import {
  HeartIcon,
  CheckCircleIcon,
  UsersIcon,
  StarIcon,
  ScaleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

// Icon mapping (string → JSX component)
const iconMap = {
  HeartIcon: <HeartIcon className="w-8 h-8 text-blue-600" />,
  CheckCircleIcon: <CheckCircleIcon className="w-8 h-8 text-green-600" />,
  UsersIcon: <UsersIcon className="w-8 h-8 text-purple-600" />,
  StarIcon: <StarIcon className="w-8 h-8 text-yellow-500" />,
  ScaleIcon: <ScaleIcon className="w-8 h-8 text-red-600" />,
  ShieldCheckIcon: <ShieldCheckIcon className="w-8 h-8 text-indigo-600" />,
};

function About() {
  const about = data.aboutus || [];
  const values = data.coreValues || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* About Us Section */}
      {about.map((section, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{section.title}</h2>
          {section.content?.map((para, idx) => (
            <p key={idx} className="text-gray-700 text-lg mb-4 leading-relaxed">
              {para.text}
            </p>
          ))}
        </div>
      ))}

      {/* Core Values Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Core Values</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Whatever we do, we ensure to live by our values. The customer always comes first,
          and all of our values ensure that we deliver utmost customer satisfaction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-full shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="mb-3">{iconMap[item.icon]}</div>
              <p className="text-gray-800 font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
