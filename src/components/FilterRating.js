import React from 'react'
import ReactStars from "react-rating-stars-component";


function FilterRating({rating}) {
    return (
        <div>
            <ReactStars
    onChange={(newRating)=>rating(newRating)}
    count={5}
    size={24}
    activeColor="#ffd700"
  />
        </div>
    )
}

export default FilterRating