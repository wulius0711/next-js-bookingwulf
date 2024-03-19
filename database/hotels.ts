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
        hotels (
          hotel_name,
          description,
          address,
          rating,
          price_per_night
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
        hotel_name,
        description,
        address,
        rating,
        price_per_night
    `;
    return hotel;
  },
);

export const getHotelsInsecure = cache(async () => {
  const hotels = await sql<Hotel[]>`
    SELECT
      *
    FROM
      hotels
    ORDER BY
      id
  `;

  return hotels;
});

export const getHotelInsecure = cache(async (id: number) => {
  // Postgres always returns an array
  const [hotel] = await sql<Hotel[]>`
    SELECT
      *
    FROM
      hotels
    WHERE
      hotel_name = ${hotelName}
  `;

  return hotel;
});

export const updateHotelInsecure = cache(async (updatedHotel: Hotel) => {
  const [hotel] = await sql<Hotel[]>`
    UPDATE hotels
    SET
      hotel_name = ${updatedHotel.hotelName},
      description = ${updatedHotel.description},
      address = ${updatedHotel.address},
      rating = ${updatedHotel.rating},
      price_per_night = ${updatedHotel.pricePerNight}
    WHERE
      hotel_name = ${updatedHotel.hotelName}
    RETURNING
      hotels.*
  `;

  return hotel;
});
