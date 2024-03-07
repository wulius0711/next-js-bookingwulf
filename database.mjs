import dotenv from 'dotenv';
import postgres from 'postgres';

dotenv.config();

const sql = postgres(
  'postgres://bookingwulf:db-bookingwulf2024@localhost:5432/bookingwulf',
);

console.log(
  await sql`
    SELECT
      *
    FROM
      hotels
  `,
);
