"use client";
import React from "react";
import menuData from "@/data/menu.json";

function NavBar() {
  return (
    <header className="bg-orange-400 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">🚚 GSMT</h1>

        {/* Navigation from JSON */}
        <nav className="flex items-center space-x-6 z-50">
          {menuData.menu.map((item, idx) => {
            if (item.type === "dropdown") {
              return (
                <div key={idx} className="relative group ">
            <button className="px-3 py-2  hover:rounded-sm hover:bg-blue-100 hover:scale-110 transition-all duration-300 hover:bg-blue-500 hover:text-gray-200 hover:scale-110">
  {item.name} ▾
</button>
                  <div className=" px-3 py-2  absolute  hidden  hover:rounded-sm hover:bg-blue-100 hover:scale-110 transition-all duration-300 group-hover:block bg-white text-black mt-0 rounded shadow-lg min-w-[220px]">
                    {item.children.map((child, cidx) => (
                      <a
                        key={cidx}
                        href={child.link}
                        className="block px-2 py-2 hover:bg-gray-100"
                      >
                        {child.name} 
                      </a>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <a
                  key={idx}
                  href={item.link}
                  className="px-3 py-2 rounded-sm transition-all duration-300 hover:bg-blue-500 hover:text-gray-200 hover:scale-110"
                >
                  {item.name}
                </a>
              );
            }
          })}
        </nav>





      </div>
    </header>
  );
}

export default NavBar;
