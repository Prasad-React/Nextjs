"use client";
import React from "react";
import menuData from "@/data/menu.json";
import { usePathname } from "next/navigation";
import colors from "@/styles/colors";

function NavBar() {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 text-white shadow-md z-50" style={{backgroundColor:colors.bgColor8}}>
        <div className="container  mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">🚚 GSMT</h1>

          {/* Navigation from JSON */}
          <nav className="flex items-center space-x-6 z-50">
            {menuData.menu.map((item, idx) => {
              if (item.type === "dropdown") {
                // Check if any child link matches current path
                const isActiveParent = item.children.some(
                  (child) => child.link === pathname
                );

                return (
                  <div key={idx} className="relative group">
                    <button
                      className={`px-3 py-2 rounded-sm transition-all duration-300 hover:bg-green-600 hover:text-gray-200 hover:scale-110 ${
                        isActiveParent ? "bg-orange-600 text-white" : ""
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
                              isActiveChild ? "bg-orange-600 text-white" : ""
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
                      isActive ? "bg-orange-600 text-white" : ""
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
