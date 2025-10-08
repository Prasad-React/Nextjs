
import menuData from "@/data/menu.json";
import Image from "next/image";
import "@/styles/globals.css";
import colors from "@/styles/colors";

export default function Header() {
  return (

    <>
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
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </a>
            ))}
          </div>

          {/* Headings on the right */}
          <div className="flex flex-col items-center gap-2 text-center" >
            <h1 className="text-3xl  flex-center font-bold" style={{ color: colors.bgColor6 }}>{item.header}</h1>
            <h4 className="text-xl font-semibold" style={{ color: colors.bgColor8 }}>{item.heading}</h4>
          </div>
        </div>
      ))}

      
    </div>

     {/* <div className="relative overflow-hidden w-full h-[50px]">
    <div className="gif-truck-animation">
      <Image 
         src={menuData.Navbar[0].imgsrc} 
         alt="Truck"
        width={70}
        height={30}
      />
    </div>
  </div> */}
</>
    
  );
}



// // import { Truck } from "lucide-react";
// import menuData from "@/data/menu.json";
// import Image  from "next/image";
// import "@/styles/globals.css"; 


// export default function Header() {
//   return (
//     <>
//     <div className="flex flex-col items-center justify-center text-center gap-4 py-4">
//       {menuData.Header.map((item, index) => (
//         <div key={index} className="mb-4">
      
//         {item.img1?.map((img, i) => (
//             <a key={i} href={img.link} target="_blank" rel="noopener noreferrer">
//               <Image
//                 src={img.imgsrc}
//                 alt={img.imgalt}
//                 width={60}
//                 height={60}
//                 className="mx-auto"
//               />
//             </a>   
//           ))} 

      
//           <div className="flex flex-col items-center mt-2">
//             {/* <Truck className="w-8 h-8 text-blue-600" /> */}
//             <h2 className="text-3xl font-bold">{item.header}</h2>
//             <h4 className="text-xl font-semibold">{item.heading}</h4>
//           </div>

//           {/* Render second image (if exists) */}
//           {/* {item.img2?.map((img, i) => (
//             <Image
//               key={i}
//               src={img.imgsrc}
//               alt={img.imgalt}
//               width={80}
//               height={80}
//               className="mx-auto mt-2"
//             />
//           ))} */}
//         </div>
//       ))}
//     </div>

//       {/* <div className="relative overflow-hidden w-full h-[50px]">
//     <div className="gif-truck-animation">
//       <Image 
//         src={menuData.Navbar[0].imgsrc} 
//         alt="Truck"
//         width={70}
//         height={30}
//       />
//     </div>
//   </div> */}
//   </>
//   );
// }
