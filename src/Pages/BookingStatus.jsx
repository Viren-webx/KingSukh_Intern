import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Calendar, Users, BedDouble, Mail, Home, ArrowRight } from "lucide-react";

export default function BookingStatus() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;



  if (!data) return null;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4 py-10">

      {/* Card */}
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 max-w-lg w-full border border-white">

        {/* ✅ Animated Tick */}
        <div className="flex flex-col items-center mb-8">

          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* circle */}
            <div className="absolute inset-0 rounded-full border-4 border-green-200 animate-ping opacity-30"></div>

            {/* svg tick */}
            <svg
              className="w-20 h-20"
              viewBox="0 0 52 52"
            >
              <circle
                cx="26"
                cy="26"
                r="25"
                fill="none"
                className="stroke-green-500"
                strokeWidth="2"
              />

              <path
                fill="none"
                stroke="green"
                strokeWidth="4"
                d="M14 27 l7 7 l16 -16"
                className="tick-path"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-slate-800 mt-4">
            Booking Confirmed!
          </h1>
          <p className="text-gray-500 mt-2">
            Your reservation is successfully completed.
          </p>
        </div>

        {/* Details */}
        <div className="bg-slate-50 rounded-2xl p-5 mb-6 border space-y-4">
          <div className="flex justify-between border-b border-dashed pb-3">
            <span className="text-xs font-bold text-gray-400">
              RESERVATION
            </span>
            <span className="text-green-600 font-bold text-xs">CONFIRMED</span>
          </div>

<div className="grid grid-cols-2 gap-4 text-sm">

  {/* 👤 Guest Name (NEW) */}
  <div className="flex gap-2 items-center col-span-2 bg-green-50 p-3 rounded-xl">
    <span className="text-lg">👤</span>
    <div>
      <p className="text-[10px] text-gray-400 uppercase font-bold">Guest Name</p>
      <p className="font-semibold text-gray-800">
        {data.firstName} {data.surname}
      </p>
    </div>
  </div>

  <div className="flex gap-2 items-center">
    <span>🛏️</span>
    <span>{data.room}</span>
  </div>

  <div className="flex gap-2 items-center">
    <span>👥</span>
    <span>{data.guests}</span>
  </div>

  <div className="flex gap-2 items-center">
    <span>📅</span>
    <span>{data.checkIn}</span>
  </div>

  <div className="flex gap-2 items-center">
    <span>📅</span>
    <span>{data.checkOut}</span>
  </div>

</div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 bg-gray-200 border rounded-xl p-3 mb-6">
          <Mail className="w-4 h-4 text-blue-500" />
          <p className="text-sm text-gray-800">
            Confirmation sent to <b>{data.email}</b>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/booking")}
            className="flex-1 border py-3 rounded-xl hover:bg-gray-100 transition flex items-center justify-center gap-1"
          >
            Again <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ✅ Tick Animation CSS */}
      <style>
        {`
        .tick-path {
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: draw 0.6s ease-out forwards 0.3s;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        `}
      </style>
    </section>
  );
}