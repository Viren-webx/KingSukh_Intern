import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Feedback() {

const [reviews, setReviews] = useState([
  {
    name: "Rahul Sharma",
    rating: 5,
    text: "Amazing stay! The rooms were clean and the view was beautiful.",
    likes: 15,
    liked: false,
  },
  {
    name: "Priya Verma",
    rating: 4,
    text: "Very comfortable and peaceful place. Staff was very helpful.",
    likes: 13,
    liked: false,
  },
  {
    name: "Amit Kumar",
    rating: 5,
    text: "Loved the food and the hospitality. Highly recommended!",
    likes: 18,
    liked: false,
  },
]);

  const toggleLike = (index) => {
  const updated = [...reviews];

  if (updated[index].liked) {
    updated[index].likes -= 1;
  } else {
    updated[index].likes += 1;
  }

  updated[index].liked = !updated[index].liked;
  setReviews(updated);
};

  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      
      {/* TOP STATS */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
        
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="text-2xl md:text-3xl font-bold ">100+</h2>
          <p className="text-gray-600">Bookings Completed</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="text-2xl md:text-3xl font-bold ">100+</h2>
          <p className="text-gray-600">Happy Customers</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="text-2xl md:text-3xl font-bold ">4.8</h2>
          <p className="text-gray-600">Average Rating</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="text-2xl md:text-3xl font-bold ">24/7</h2>
          <p className="text-gray-600">Support</p>
        </div>

      </div>

      {/* HEADING */}
      <div className="text-center mb-10">
        <h3 className="text-red-600 font-semibold uppercase">
          Review
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Guests Say
        </h2>
      </div>

      {/* REVIEWS */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            data-aos="fade-up"
          >
            
            {/* USER */}
            <div className="flex items-center gap-4 mb-4">

              <h3 className="font-semibold">{review.name}</h3>
            </div>

            {/* RATING */}
            <div className="flex text-yellow-400 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* TEXT */}
            <p className="text-gray-600 text-sm">
              {review.text}
            </p>

            {/* LIKES */}
            <div className="flex items-center justify-between mt-4">
  
  {/* Like Button */}
  <button
    onClick={() => toggleLike(index)}
    className="flex items-center gap-2 active:scale-125 transition"
  >
    <FaHeart
      className={`${
        review.liked ? "text-red-600" : "text-gray-400"
      } transition`}
    />
    <span className="text-sm text-gray-600">
      {review.likes}
    </span>
  </button>

</div>

          </div>
        ))}

      </div>
    </section>
  );
}