import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path, id) => {
  navigate(path);

  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }, 100);
};



const navLinks = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Rooms", path: "/rooms" },
  { name: "Services", path: "/services" }, 
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const handleBooking = () => {
  navigate("/booking");
};


  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 grid grid-cols-3 items-center">
        
        {/* Left - Logo */}
        <div className="flex items-center gap-2 min-w-0">
          
          {/* Logo Container */}
          <div className="bg-slate-500 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center overflow-hidden shrink-0">
            <img
              src="/NavbarLogo/Logo.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="leading-tight">
            <h1 className="text-sm sm:text-lg md:text-xl font-bold text-yellow-700">
              KingSukh
            </h1>
            <h2 className="text-[10px] sm:text-xs md:text-sm text-gray-700">
              Guest House
            </h2>
          </div>
        </div>

        {/* Center - Menu */}
<ul className="hidden md:flex space-x-6">
  {navLinks.map((link) => (
    <li key={link.name}>
      <Link
        to={link.path}
        className="hover:text-red-600"
      >
        {link.name}
      </Link>
    </li>
  ))}
</ul>

        {/* Right - Button */}
        <div className="hidden md:flex justify-end">
          <button  onClick={handleBooking} className="bg-red-600 text-white text-sm lg:text-lg px-4 lg:px-5 py-2 rounded-xl hover:bg-red-700 transition">
            BOOK NOW
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden col-span-2 flex justify-end">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ImCross size={20} /> : <MdMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-14 left-0 w-full bg-white/20 backdrop-blur-md z-50 border-t">
<ul className="flex flex-col items-center space-y-4 py-5 text-gray-700 font-medium">
  {navLinks.map((link) => (
<li
  key={link.name}
  onClick={() => handleNav(link.path, link.id)}
  className="cursor-pointer hover:text-red-600"
>
  {link.name}
</li>
  ))}
</ul>
        </div>
      )}
    </nav>
  );
}