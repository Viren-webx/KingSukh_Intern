import {
  MdLocationOn,
  MdBedroomParent,
  MdWifi,
  MdRestaurant,
  MdSupportAgent,
} from "react-icons/md";
import { FaParking, FaFire } from "react-icons/fa";
import { GiMountainCave } from "react-icons/gi";
import { MdRoomService } from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    {
      icon: <MdLocationOn size={40} />,
      title: "Prime Location",
      desc: "Situated close to key landmarks, business hubs, and cultural attractions.",
    },
    {
      icon: <MdBedroomParent size={40} />,
      title: "Spacious Rooms",
      desc: "Well-furnished, air-conditioned rooms with modern amenities.",
    },
    {
      icon: <MdWifi size={40} />,
      title: "Free Wi-Fi",
      desc: "Stay connected with high-speed internet access.",
    },
    {
      icon: <MdRestaurant size={40} />,
      title: "Delicious Meals",
      desc: "Enjoy home-cooked style meals with local and continental flavors.",
    },
    {
      icon: <MdSupportAgent size={40} />,
      title: "24/7 Assistance",
      desc: "Our staff is always available to help you anytime during your stay.",
    },
      {
    icon: <FaParking size={40} />,
    title: "Free Parking",
    desc: "Secure and spacious parking facility available for all guests.",
  },
  {
    icon: <GiMountainCave size={40} />,
    title: "Scenic View Rooms",
    desc: "Enjoy breathtaking views of hills and natural surroundings.",
  },
  {
    icon: <FaFire size={40} />,
    title: "Bonfire & Outdoor Seating",
    desc: "Relax with friends and family in our cozy outdoor seating area.",
  },
  {
  icon: <MdRoomService size={40} />,
  title: "Room Service",
  desc: "Enjoy prompt in-room dining and housekeeping services for a comfortable stay.",
}

  ];

  return <>
      <Navbar />
    <section id="services" className="py-16 px-4 md:px-10 bg-rose-50">
        <div className="max-w-7xl mx-auto text-center bg-gray-50  py-9 px-9  mb-10">
           
      
      <div className="max-w-7xl mx-auto text-center  mb-10">
        <h3 className="text-red-600 font-semibold uppercase mb-2">
          Our Services
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold">
          What We Offer!
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300 "
            data-aos="fade-up"
          >
            
            {/* Icon */}
            <div className="text-red-600 mb-4 flex justify-center hover:-translate-y-2 transition duration-300  ">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm">
              {service.desc}
            </p>

          </div>
        ))}

      </div>
       </div>
    </section>
  
  </>
  
}