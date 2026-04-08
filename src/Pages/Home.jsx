import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const images = [
    "/HomePageImg/1.jpg",
    "/HomePageImg/ayodhya.webp",
    "/HomePageImg/baranti.webp",
  ];

  const [current, setCurrent] = useState(0);

  // ✅ Booking State
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const navigate = useNavigate();

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Handle Booking
  const handleBooking = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      alert("Please select both dates");
      return;
    }

    if (checkOut < checkIn) {
      alert("Check-out must be after Check-in");
      return;
    }

    navigate("/booking", {
      state: { checkIn, checkOut },
    });
  };

  return (
    <>
      <Navbar />

      <section id="home" className="relative h-screen w-full overflow-hidden">

        {/* Background Images */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Guest House"
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center gap-20 items-center text-center text-white px-4">

          <div className="max-w-2xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl italic font-serif mb-2">
              Baranti
            </h1>

            <p className="text-lg md:text-2xl text-gray-300">
              Feel at Home Surrounded by Hills at Kingsukh Guest House.
            </p>
          </div>

          {/* ✅ Booking Box */}
          <div data-aos="fade-up" className="w-full px-3 sm:px-6">

            <form
              onSubmit={handleBooking}
              className="bg-white/30 backdrop-blur-md text-black w-full max-w-6xl mx-auto rounded-2xl shadow-xl 
              p-6 sm:px-4 flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6"
            >

              {/* Check In */}
              <div className="flex flex-col w-full md:flex-1">
                <label className="text-sm text-white font-medium mb-2">
                  Check In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  required
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="border text-gray-700 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-red-400 outline-none"
                />
              </div>

              {/* Check Out */}
              <div className="flex flex-col w-full md:flex-1">
                <label className="text-sm text-white font-medium mb-2">
                  Check Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  required
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="border text-gray-700 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-red-400 outline-none"
                />
              </div>

              {/* Button */}
              <div className="w-full md:w-auto flex items-end">
                <button
                  type="submit"
                  className="bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700 transition w-full md:w-auto text-base md:text-lg font-semibold shadow-md"
                >
                  Book Now
                </button>
              </div>

            </form>

          </div>

        </div>
      </section>


    </>
  );
}