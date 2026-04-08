import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return <>
    <Navbar />
    <section id="about" className="py-16 px-4 md:px-10 bg-rose-50 overflow-hidden">


      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">

        {/* LEFT SIDE - TEXT */}
        <div className="order-2 md:order-1">

          <div data-aos="fade-up">
            <h3 className="text-red-400 font-semibold mb-2 uppercase">
              About Us
            </h3>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Welcome to <span className="text-yellow-700">KingSukh</span> Guest House
            </h2>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
              Embark on a tranquil journey at our Kingsukh Guest House, enveloped by
              the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
              Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
              captivating Panchat Dam. Revel in the embrace of comfort, relish
              delightful meals, and unwind in our verdant garden oasis. Your ideal
              retreat beckons, promising a harmonious blend of nature's beauty and
              heartfelt hospitality.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center order-1 md:order-2">

<div className="w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden rounded-lg relative">
  <img
    src="/AboutPageImg/womenImg1.png"
    alt="Welcome"
    className="w-full h-auto object-contain"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-rose-50 via-transparent to-transparent"></div>
</div>


        </div>

      </div>
    </section>



  </>;
}