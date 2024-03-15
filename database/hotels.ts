import { cache } from 'react';
import { sql } from './connect';

export type Hotel = {
  hotelName: string;
  description: string;
  address: string;
  rating: number;
  pricePerNight: string;
};

export const createHotelInsecure = cache(
  async (
    hotelName: string,
    description: string,
    address: string,
    rating: number,
    pricePerNight: string,
  ) => {
    const [hotel] = await sql<
      Pick<
        Hotel,
        'hotelName' | 'description' | 'address' | 'rating' | 'pricePerNight'
      >[]
    >`
      INSERT INTO
        hotel (
          hotelname,
          description,
          address,
          rating,
          pricepernight,
        )
      VALUES
        (
          ${hotelName},
          ${description},
          ${address},
          ${rating},
          ${pricePerNight}
        )
      RETURNING
        hotelname,
        description,
        address,
        rating,
        pricepernight,
    `;
    return hotel;
  },
);
