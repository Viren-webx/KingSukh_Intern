 import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";  
import Home from './Home'
import About from './About'
import Rooms from './Rooms'
import Services from './Service'  
import Gallery from './Gallery'
import Contact  from './Contact'
import Booking from "./Booking";
import Feedback from "./Feedback";

import { useParams } from "react-router-dom";

export default function Allpage() {

    const { section } = useParams();

  useEffect(() => {
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="rooms"><Rooms /></section>
      <section id='feedback'><Feedback /></section>
     <section id="services"><Services /></section>
      <section id="gallery"><Gallery /></section>
      <section id="contact"><Contact /></section>


    </>
  );
}