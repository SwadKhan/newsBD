import React from "react";
import { FaEye, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { news } = props || {};

  // Helper to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-500" />);
    }
    if (rating % 1 !== 0) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-500" />);
    }
    return stars;
  };

  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Author Info */}
      <div className="flex items-center p-4">
        <img
          className="w-10 h-10 object-cover rounded-full"
          src={news.author.img}
          alt={news.author.name}
        />
        <div className="ml-4">
          <h1 className="text-gray-800 text-sm font-bold">
            {news.author.name}
          </h1>
          <p className="text-gray-600 text-xs">{news.author.published_date}</p>
        </div>
      </div>

      {/* Image Section */}
      <img
        className="w-full h-48 object-cover rounded-lg p-1"
        src={news.image_url}
        alt={news.title}
      />

      {/* News Content */}
      <div className="p-4">
        <h1 className="text-gray-800 font-bold text-lg">{news.title}</h1>
        <p className="text-gray-600 text-sm mt-2">
          {news.details.substring(0, 100)}...{" "}
          <Link to={`/news/${news._id}`} className="text-blue-500 font-bold">
            Read More
          </Link>
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
        {/* Ratings Section */}
        <div className="flex items-center">
          {renderStars(news.rating.number)}
          <span className="text-gray-800 ml-2">{news.rating.number}</span>
        </div>

        {/* Views Section */}
        <div className="flex items-center">
          <FaEye className="text-gray-600" />
          <span className="text-gray-800 ml-1">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
