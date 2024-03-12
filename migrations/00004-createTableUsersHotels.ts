import { Sql } from 'postgres';
import { Hotel } from './00002-createTableHotels';

export type UserHotels = {
  userId: number;
  hotelId: number;
};

export type JsonAgg = Hotel[];

export type UserWithHotels = {
  userId: number;
  userFirstName: string;
  userLastName: string;
  userMail: string;
  userUsername: string;
  userHotels: JsonAgg;
};

export type Test = {
  userId: number;
  userFirstName: string;
  userType: string;
  userAccessory: string | null;
  userHotels: JsonAgg;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE user_hotels (
      id integer PRIMARY key generated always AS identity,
      user_id integer NOT NULL REFERENCES users (id) ON DELETE cascade,
      hotel_id integer NOT NULL REFERENCES hotels (id)
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE user_hotels `;
}
