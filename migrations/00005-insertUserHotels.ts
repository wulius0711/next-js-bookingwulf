import { Sql } from 'postgres';

const userHotels = [
  { id: 1, userId: 1, hotelId: 4 },
  { id: 2, userId: 3, hotelId: 2 },
  { id: 3, userId: 1, hotelId: 3 },
  { id: 4, userId: 4, hotelId: 5 },
  { id: 5, userId: 4, hotelId: 7 },
  { id: 6, userId: 1, hotelId: 6 },
  { id: 7, userId: 2, hotelId: 1 },
  { id: 8, userId: 2, hotelId: 8 },
];

export async function up(sql: Sql) {
  for (const userHotel of userHotels) {
    await sql`
      INSERT INTO
        user_hotels (user_id, hotel_id)
      VALUES
        (
          ${userHotel.userId},
          ${userHotel.hotelId}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const userHotel of userHotels) {
    await sql`
      DELETE FROM user_hotels
      WHERE
        id = ${userHotel.id}
    `;
  }
}
