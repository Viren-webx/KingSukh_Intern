import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // add useNavigate
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Rooms() {
  const navigate = useNavigate(); // add navigate

  const rooms = [
    {
      name: "Deluxe Room",
      beforePrice: "₹2000 / Night",
      price: "₹1500 / Night",
      disp: "Unwind in the serene garden suite with lush greenery views.",
      img: "/RoomsImg/large.jpg",
    },
    {
      name: "Standard Room",
      beforePrice: "₹1500 / Night",
      price: "₹1000 / Night",
      disp: "Comfortable and convenient for a relaxing stay.",
      img: "/RoomsImg/recep.jpg",
    },
    {
      name: "Family Room",
      beforePrice: "₹2000 / Night",
      price: "₹1500 / Night",
      disp: "Spacious and ideal for families.",
      img: "/RoomsImg/room1.jpg",
    },
    {
      name: "Suite Room",
      beforePrice: "₹3000 / Night",
      price: "₹2500 / Night",
      disp: "Luxurious suite for premium stays.",
      img: "/RoomsImg/small.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rooms.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % rooms.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  // ✅ Updated: Book Now with preselected room and default 2 guests
  const handleBooking = (roomName) => {
    navigate("/booking", { state: { room: roomName, guests: "2 Guests" } });
  };

  return (
    <>
      <Navbar />
      <section id="rooms" className="py-12 md:py-16 px-4 md:px-10 bg-rose-50 overflow-hidden">
        {/* Heading */}
        <div className="max-w-7xl mx-auto mb-10 text-left md:text-left">
          <h3 className="text-red-400 font-semibold uppercase mb-2" data-aos="fade-right">
            Our Rooms
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold" data-aos="fade-left">
            Comfortable Stays at <span className="text-yellow-700">KingSukh</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE */}
          <div className="order-1 md:order-1 flex justify-start" data-aos="fade-right">
            <img
              src="/AboutPageImg/womenImg2.png"
              alt="Welcome"
              className="w-full md:w-[120%] max-w-none h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-50 via-transparent to-transparent"></div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="order-2 md:order-2 relative overflow-hidden" data-aos="fade-left">
            <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
              {rooms.map((room, i) => (
                <div key={i} className="min-w-full px-2">
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    {/* Image */}
                    <div className="w-full h-48 md:h-64 overflow-hidden">
                      <img
                        src={room.img}
                        alt={room.name}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-lg md:text-xl font-bold mb-1">{room.name}</h3>
                      <p className="text-gray-500 text-sm mb-2 line-clamp-2">{room.disp}</p>
                      <p className="text-red-400 text-sm line-through">{room.beforePrice}</p>
                      <p className="text-green-600 font-semibold mb-3">{room.price}</p>

                      {/* ✅ Updated: Pass room name to handleBooking */}
                      <button
                        onClick={() => handleBooking(room.name)}
                        className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center gap-4 mt-4">
              <button onClick={prevSlide} className="bg-gray-200 p-3 rounded-full hover:bg-gray-300">
                <FaArrowLeft />
              </button>
              <button onClick={nextSlide} className="bg-gray-200 p-3 rounded-full hover:bg-gray-300">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}