import { useState } from "react";
import { ImCross } from "react-icons/im";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const images = [
    "/GalleryPage/out.jpg",
    "/GalleryPage/flower.jpg",
    "/GalleryPage/mithonDam.webp",
    "/GalleryPage/palash.webp",
    "/GalleryPage/g1.jpg",
    "/GalleryPage/g2.jpg",
    "/GalleryPage/g3.jpg",
    "/GalleryPage/g4.jpg",
    "/GalleryPage/g5.jpg",
    "/GalleryPage/g6.jpg",

  ];

 const [selectedImg, setSelectedImg] = useState(null);

  return <>
      <Navbar />
    <section id="gallery" className="py-16 px-4 md:px-10 bg-rose-50">
            <div className="bg-gray-100 p-9 " >
      {/* Heading */}
      <div className="text-center mb-10">
        <h3 className="text-red-600 font-semibold uppercase">
          Gallery
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold">
          Explore Our Guest House View
        </h2>
      </div>

      {/* Masonry Layout */}

      <div className="max-w-4xl  mx-auto columns-2 md:columns-3 gap-4 space-y-4">
        
        {images.map((img, index) => (
          <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img}
              alt="gallery"
              className="w-full h-auto object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}

      </div>

      {/* POPUP */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          
          <div
            className="absolute inset-0"
            onClick={() => setSelectedImg(null)}
          ></div>

          <img
            src={selectedImg}
            alt="popup"
            className="max-w-[90%] max-h-[85%] rounded-lg z-10"
          />

          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-5 right-5 text-red-500 text-2xl"
          >
            <ImCross />
          </button>
        </div>
        
      )}
      </div>

    </section>
  </>
}