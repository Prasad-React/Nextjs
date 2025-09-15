
import { Truck } from "lucide-react";
import menuData from "@/data/menu.json";



export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 py-4">
      {menuData.Header.map((item, index) => (
        <div key={index} className="mb-4">
      
          {/* {item.img1?.map((img, i) => (
            <a key={i} href={img.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={img.imgsrc}
                alt={img.imgalt}
                width={60}
                height={60}
                className="mx-auto"
              />
            </a>
          ))} */}

      
          <div className="flex flex-col items-center mt-2">
            <Truck className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold">{item.header}</h2>
            <h4 className="text-xl font-semibold">{item.heading}</h4>
          </div>

          {/* Render second image (if exists) */}
          {/* {item.img2?.map((img, i) => (
            <Image
              key={i}
              src={img.imgsrc}
              alt={img.imgalt}
              width={80}
              height={80}
              className="mx-auto mt-2"
            />
          ))} */}
        </div>
      ))}
    </div>
  );
}
