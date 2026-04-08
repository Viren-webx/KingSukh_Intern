import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Footer  from "../components/Footer";

export default function Contact() {
  return <>
    <Navbar />
    <section id="contact" className="py-16 px-4 md:px-10 bg-rose-50 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2  items-start">

        {/* LEFT INFO */}
        <div className="order-1 md:order-1">
          <div data-aos="fade-up">
            <h3 className="text-red-400 font-semibold uppercase mb-2">
              Contact Us
            </h3>
          </div>

          <div className="bg-gradient-to-l from-white/80 to-rose-200 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Get In Touch
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="flex items-center gap-3">
                <MdLocationOn className="text-red-600" size={24} />
                Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
              </p>
              <p className="flex items-center gap-3">
                <MdPhone className="text-red-600" size={24} />
                +91 9007062180
              </p>
              <p className="flex items-center gap-3">
                <MdEmail className="text-red-600" size={24} />
                kkghosh0099@gmail.com
              </p>
            </div>

            {/* Map */}
            <h3 className="mt-6 text-2xl font-bold flex items-center gap-3" data-aos="fade-up" data-aos-delay="200">
              <FaMapLocation className="text-green-600" size={24} />
              Here we are located
            </h3>

            <div className="mt-4 rounded-lg overflow-hidden shadow-lg w-full">
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  title="location-map"
                  src="https://www.google.com/maps?q=Kingsukh%20Guest%20House&output=embed"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="order-2 md:order-2">
          <div className="bg-white/70 p-6 rounded-r-2xl rounded-t-2xl flex flex-col justify-center space-y-4" data-aos="fade-up" data-aos-delay="300">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-400 font-bold mb-6">
              Send Us a Message
            </h1>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full border-none p-3 rounded-lg focus:ring-2 bg-gray-100  active:outline-blue-300 focus:outline-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full border-none p-3 rounded-lg focus:ring-2 bg-gray-100 active:outline-blue-300 focus:outline-blue-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                required
                className="w-full border-none p-3 rounded-lg focus:ring-2 bg-gray-100 active:outline-blue-300 focus:outline-blue-400"
              ></textarea>
              <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>

      <Footer />


  </>
}