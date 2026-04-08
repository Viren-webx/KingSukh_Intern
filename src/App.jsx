import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Service";
import Rooms from "./Pages/Rooms";
import Gallery from "./Pages/Gallery";
import Contact  from "./Pages/Contact";
import Allpage from "./Pages/Allpage";
import Booking from "./Pages/Booking";
import BookingStatus from "./Pages/BookingStatus";

function App() {

   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <>

<Routes>
  <Route path="/" element={<Allpage />} />
  <Route path="/:section" element={<Allpage />} />
  <Route path="/booking" element={<Booking />} />
  <Route path="/bookingStatus" element={<BookingStatus />} />
</Routes>
    </>
  )
}

export default App
