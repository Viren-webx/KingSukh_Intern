import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="Footer" className="bg-gray-900 text-white py-12 px-4 md:px-10">
      
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* ABOUT */}
        <div>
          <h2 className="text-2xl font-bold mb-3 ">
            <b className="text-yellow-700" >KingSukh</b> Guest House
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover a world of comfort, luxury, and adventure as you explore 
            our curated selection of hotels, making every moment of your getaway 
            truly extraordinary.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Browse Destinations</li>
            <li className="hover:text-white cursor-pointer">Special Offers & Packages</li>
            <li className="hover:text-white cursor-pointer">Room Types & Amenities</li>
            <li className="hover:text-white cursor-pointer">Customer Reviews & Ratings</li>
            <li className="hover:text-white cursor-pointer">Travel Tips & Guides</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Concierge Assistance</li>
            <li className="hover:text-white cursor-pointer">Flexible Booking Options</li>
            <li className="hover:text-white cursor-pointer">Airport Transfers</li>
            <li className="hover:text-white cursor-pointer">Wellness & Recreation</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="/" className="hover:text-blue-500 cursor-pointer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/kingsukhguesthouse/" className="hover:text-pink-500 cursor-pointer">
              <FaInstagram />
            </a>
            <a href="/" className="hover:text-blue-400 cursor-pointer">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-4 text-sm">
        © 2026 KingSukh Guest House. All rights reserved.
      </div>

    </footer>
  );
}