import { cache } from 'react';
import { sql } from './connect';

export type Hotel = {
  id: number;
  hotelName: string;
  description: string;
  address: string;
  rating: number;
  pricePerNight: string;
  imageUrl: string;
};

export const createHotelInsecure = cache(
  async (
    hotelName: string,
    description: string,
    address: string,
    rating: number,
    pricePerNight: string,
    imageUrl: string,
  ) => {
    const [hotel] = await sql<
      Pick<
        Hotel,
        | 'hotelName'
        | 'description'
        | 'address'
        | 'rating'
        | 'pricePerNight'
        | 'imageUrl'
      >[]
    >`
      INSERT INTO
        hotels (
          hotel_name,
          description,
          address,
          rating,
          price_per_night,
          image_url
        )
      VALUES
        (
          ${hotelName},
          ${description},
          ${address},
          ${rating},
          ${pricePerNight},
          ${imageUrl}
        )
      RETURNING
        hotel_name,
        description,
        address,
        rating,
        price_per_night,
        image_url
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

export const getHotelInsecure = cache(async (hotelName: string) => {
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
      price_per_night = ${updatedHotel.pricePerNight},
      image_url = ${updatedHotel.imageUrl}
    WHERE
      hotel_name = ${updatedHotel.hotelName}
    RETURNING
      hotels.*
  `;

  return hotel;
});
