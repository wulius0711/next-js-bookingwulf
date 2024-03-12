'use client';

import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

export function MyRating() {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (rate: number) => {
    setRatingValue(rate);
  };
  return <Rating onClick={handleRating} />;
}
