import React from 'react';
import menuData from '@/data/menu.json'; 
import colors from '@/styles/colors';

import {
  FaTruck,
  FaWarehouse,
  FaBoxes
} from 'react-icons/fa';

const iconMap = {
 FaTruck:FaTruck,
  FaWarehouse:FaWarehouse,
  FaBoxes:FaBoxes,
};

function Services() {
  const { servicesSection, services } = menuData;

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8" style={{backgroundColor:colors.bgColor9}}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{servicesSection.title}</h2>
        <p className="text-gray-600 mb-12">{servicesSection.subtitle}</p>

        <div className="grid gap-8  sm:grid-cols-2  lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">{Icon && <Icon className="text-4xl text-orange-500" />}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>

<div className="mt-12 flex justify-center">
  <p className="inline-block px-6 py-3 border border-orange-600 bg-orange-100 rounded-md text-lg font-medium text-orange-600 cursor-pointer hover:bg-orange-200 hover:border-orange-700 transition">
    More Services
  </p>
</div>
    </section>
  );
}

export default Services;
