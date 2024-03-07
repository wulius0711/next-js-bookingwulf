import { Sql } from 'postgres';
import { z } from 'zod';

export type Hotel = {
  id: number;
  hotelName: string;
  description: string;
  address: string;
  rating: number;
  pricePerNight: number;
};

export const hotelSchema = z.object({
  hotelName: z.string(),
  description: z.string(),
  address: z.string().email(),
  rating: z.number(),
  pricePerNight: z.number(),
});

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE hotels (
      id integer PRIMARY key generated always AS identity,
      hotel_name varchar(40) NOT NULL,
      description text NOT NULL,
      address varchar(40) NOT NULL,
      rating integer NOT NULL,
      price_per_night integer NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE hotels `;
}