import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { createHotelInsecure, Hotel } from '../../../database/hotels';
import { hotelSchema } from '../../../migrations/00002-createTableHotels';

export type RegisterResponseBodyPost =
  | {
      hotel: Hotel;
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RegisterResponseBodyPost>> {
  // Task: Implement the user registration workflow
  // 1. Get the user data from the request
  const body = await request.json();
  console.log('Body: ', body);

  // 2. Validate the user data with zod
  const result = hotelSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.issues },
      {
        status: 400,
      },
    );
  }

  // 3. Check if user already exist in the database
  // const user = await getUserByHotelInsecure(result.data.username);

  // if (user) {
  //   return NextResponse.json(
  //     { errors: [{ message: 'username is already taken' }] },
  //     { status: 403 },
  //   );
  // }

  // const password = undefined;

  // 4. Hash the plain password from the user
  // const passwordHash = await bcrypt.hash(result.data.password, 12);

  // 5. Save the user information with the hashed password in the database
  // Datenbankabfrage für Variablen, die eingetragen werden
  const newHotel = await createHotelInsecure(
    result.data.hotelName,
    result.data.description,
    result.data.address,
    result.data.rating,
    result.data.pricePerNight,
  );
  console.log('Hotel: ', newHotel);
  if (!newHotel) {
    return NextResponse.json(
      { errors: [{ message: 'Error creating the new hotel' }] },
      { status: 500 },
    );
  }

  return NextResponse.json({
    hotel: newHotel,
  });
}
