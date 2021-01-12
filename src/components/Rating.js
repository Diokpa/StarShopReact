import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ value, text, color }) => {
  return (
    <div>
      <div className="rating">
        <span style={{color}}>
          <FontAwesomeIcon
            icon={value >= 1 ? "star" : value >= 0.5 ? "star-half-alt" : ['far', 'star']}
          />
        </span>
        <span style={{color}}>
          <FontAwesomeIcon
            icon={value >= 2 ? 'star': value >= 1.5 ? "star-half-alt" : ['far', 'star']}
          />
        </span>
        <span style={{color}}>
          <FontAwesomeIcon
            icon={value >= 3 ? "star" : value >= 2.5 ? "star-half-alt" : ['far', 'star']}
          />
        </span>
        <span style={{color}}>
          <FontAwesomeIcon
            icon={value >= 4 ? "star" : value >= 3.5 ? "star-half-alt" : ['far', 'star']}
          />
        </span>
        <span style={{color}}>
          <FontAwesomeIcon
            icon={value >= 5 ? "star" : value >= 4.5 ? "star-half-alt" : ['far', 'star']}
          />
        </span>
        <span className="ml-2">{text && text}</span>
      </div>
    </div>
  );
};

export default Rating;
