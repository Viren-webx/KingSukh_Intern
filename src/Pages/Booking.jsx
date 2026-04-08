import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { useState } from "react";

export default function Booking() {
  const navigate = useNavigate();
  const location = useLocation();

  const checkInFromHome = location.state?.checkIn || "";
  const checkOutFromHome = location.state?.checkOut || "";

const [formData, setFormData] = useState({
  firstName: "",
  surname: "",
  email: "",
  checkIn: checkInFromHome,
  checkOut: checkOutFromHome,
  guests: location.state?.guests || "2 Guests", // default 2 guests
  room: location.state?.room || "",             // preselected room
});

  // Room data
  const rooms = [
    { id: 1, name: "Deluxe Room", img: "/RoomsImg/large.jpg" },
    { id: 2, name: "Standard Room", img: "/RoomsImg/recep.jpg" },
    { id: 3, name: "Family Room", img: "/RoomsImg/room1.jpg" },
    { id: 4, name: "Suite Room", img: "/RoomsImg/small.jpg" },
  ];

  const selectedRoom = rooms.find((r) => r.name === formData.room);

  const handleBack = () => navigate("/");

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  formData.firstName = capitalizeFirstLetter(formData.firstName);
  formData.surname = capitalizeFirstLetter(formData.surname);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.room || !formData.firstName || !formData.email) {
      alert("Please fill all required fields");
      return
    }

    if (!formData.checkIn || !formData.checkOut) {
      alert("Please select dates");
      return;
    }

    if (formData.checkOut < formData.checkIn) {
      alert("Check-out must be after Check-in");
      return;
    }

    console.log(formData);
    navigate("/bookingStatus", { state: formData });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-6xl">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="mb-6 mt-3 bg-red-500 px-4 py-2 rounded-lg"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3  gap-6">
          {/* LEFT - FORM */}
          <div className="lg:col-span-2 border-2  border-blue-500 bg-white/30   p-6 rounded-2xl shadow-blue-500 shadow-2xl backdrop-blur-md">
            <h2 className="text-2xl text-black font-bold mb-6 text-center">
              Book Your Stay
            </h2>

            {/* Room Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 text-sm font-serif text-black gap-4 mb-6">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  onClick={() => setFormData({ ...formData, room: room.name })}
className={`cursor-pointer border rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${
  formData.room === room.name
    ? "border-green-600 bg-white text-black p-1 border-[3px] shadow-lg"
    : "border-gray-300"
}`}
                >
                  <img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-24 object-cover"
                  />
                  <p className="text-center font-semibold py-2">{room.name}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1  md:grid-cols-2 gap-4">
              {/* Name */}
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg outline-none focus:outline-blue-300 bg-slate-100 "
              />
             <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg outline-none focus:outline-blue-300 bg-slate-100 "
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg outline-none focus:outline-blue-300 bg-slate-100 "
              />
                            {/* Guests */}
              <div className="flex items-center gap-2 border rounded-lg  hover:border-blue-300 focus:border-blue-300 px-3 py-2">
                <FaUserFriends />
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full outline-none  bg-slate-100  "
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>

              {/* Check In */}
              <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                <MdOutlineDateRange />
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full outline-none  focus:outline-blue-300 bg-slate-100 "
                />
              </div>

              {/* Check Out */}
              <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                <MdOutlineDateRange />
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full outline-none  focus:outline-blue-300 bg-slate-100   "
                />
              </div>



              {/* Submit */}
<div className="md:col-span-2">
  <button
    type="submit"
    disabled={!formData.room} // ✅ disable if no room
    className={`w-full py-3 rounded-lg  font-semibold transition-all duration-200 
      ${formData.room 
        ? 'bg-green-600 text-white hover:bg-green-700 active:scale-95' 
        : 'bg-gray-300 text-black cursor-not-allowed'
      }`}
  >
    Confirm Booking
  </button>
</div>
            </form>
          </div>

{/* RIGHT - Booking Summary */}
<div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl w-full md:min-w-[420px] h-fit border border-gray-200 overflow-hidden">

  {/* Header */}
  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 text-white font-semibold text-lg">
    Booking Summary
  </div>

  <div className="p-5 space-y-5">

    {/* Room */}
    {selectedRoom ? (
      <div required className="relative">
        <img
          src={selectedRoom.img}
          alt={selectedRoom.name}
          className="w-full h-[200px] object-cover rounded-2xl"
        />

        <div className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-3 py-1 rounded-lg">
          {selectedRoom.name}
        </div>
      </div>
    ) : (
      <div className="text-center text-gray-400 py-10">
        🛏️ Select a room
      </div>
    )}

    {/* Divider */}
    <div className="border-t"></div>

    {/* Details */}
    {formData.room && (
      <div className="space-y-4">

        {/* Name */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
          <span className="text-gray-500 text-sm">Guest</span>
          <span className="font-semibold text-gray-800">
            {formData.firstName || "—"} {formData.surname || ""}
          </span>
        </div>

        {/* Guests */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
          <span className="text-gray-500 text-sm">Guests</span>
          <span className="font-semibold">{formData.guests}</span>
        </div>

        {/* Dates */}
        <div className="bg-gray-50 p-3 rounded-xl space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500 text-sm">Check-In</span>
            <span className="font-semibold">
              {formData.checkIn || "—"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 text-sm">Check-Out</span>
            <span className="font-semibold">
              {formData.checkOut || "—"}
            </span>
          </div>
        </div>

      </div>
    )}
  </div>
</div>
        </div>
      </div>
    </section>
  );
}