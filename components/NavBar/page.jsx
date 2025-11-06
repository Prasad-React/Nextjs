"use client";
import React from "react";
import menuData from "@/data/menu.json";
import { usePathname } from "next/navigation";
import colors from "@/styles/colors";
import Image from "next/image";
import "@/styles/globals.css";


function NavBar() {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 text-white shadow-md z-50 border-b-[4px] border-[#FFD700]" style={{backgroundColor:colors.bgColor10}}>
        <div className="container  mx-auto px-4 py-3 flex justify-between items-center">
          {/* <h1 className="text-xl font-bold">🚚 GSMT</h1> */}
 <div className="flex flex-col items-center justify-center py-3 bg-cover bg-center"   >
    
      {menuData.Header.map((item, index) => (
        <div
          key={index}
          className="container flex flex-row items-center justify-center gap-8 flex-wrap"
        >
          {/* Logos on the left */}
          <div className="flex flex-row items-center gap-10 text-left">
            {item.img1?.map((img, i) => (
              <a
                key={i}
                href={img.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={img.imgsrc}
                  alt={img.imgalt}
                  width={90}
                  height={90}
                  className="mx-auto"
                />
              </a>
            ))}
          </div>

          {/* Headings on the right */}
          <div className="flex flex-col items-left gap-2 text-left" >
            <h1 className="text-3xl  flex-left font-bold" style={{ color: colors.bgColor1 }}>{item.header}</h1>
            <h4 className="text-xl font-semibold" style={{ color: colors.bgColor11 }}>{item.heading}</h4>
          </div>
        </div>
      ))}

      
    </div>
          {/* Navigation from JSON */}
       <nav className="flex items-center space-x-6 z-50 ">
  {menuData.menu.map((item, idx) => {
    if (item.type === "dropdown") {
      const isActiveParent = item.children.some(
        (child) => child.link === pathname
      );

      return (
        <div key={idx} className="relative group">
          <button
            className={`px-3 py-2 rounded-sm transition-all duration-300 hover:bg-green-600 hover:text-gray-200 hover:scale-110 ${
              isActiveParent ? "bg-[#838383] text-white" : ""
            }`}
          >
            {item.name} ▾
          </button>

          <div className="px-3 py-2 absolute hidden group-hover:block bg-white text-black mt-0 rounded shadow-lg min-w-[220px]">
            {item.children.map((child, cidx) => {
              const isActiveChild = pathname === child.link;
              return (
                <a
                  key={cidx}
                  href={child.link}
                  className={`block px-2 py-2 hover:bg-green-100 ${
                    isActiveChild ? "bg-[#838383] text-white" : ""
                  }`}
                >
                  {child.name}
                </a>
              );
            })}
          </div>
        </div>
      );
    } else {
      const isActive = pathname === item.link;
      return (
        <a
          key={idx}
          href={item.link}
          className={`px-3 py-2 rounded-sm transition-all duration-300 hover:bg-green-500 hover:text-gray-200 hover:scale-110 ${
            isActive ? "bg-[#838383] text-white" : ""
          }`}
        >
          {item.name}
        </a>
      );
    }
  })}
</nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
