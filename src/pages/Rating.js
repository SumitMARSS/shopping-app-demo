import React from 'react';
import { FaStar , FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./Rating.css";

const RatingStar = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
        if (i <= rating) {
          stars.push(<FaStar />);
        } else if (i - 0.5 <= rating ) {
          stars.push(<FaStarHalfAlt />);
        } else {
          stars.push(<FaRegStar />);
        }
      }

    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};

export default RatingStar;