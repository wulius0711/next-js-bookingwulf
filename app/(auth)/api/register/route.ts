import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import {
  createUserInsecure,
  getUserByUsernameInsecure,
  User,
} from '../../../../database/users';
import { userSchema } from '../../../../migrations/00000-createTableUsers';

export type RegisterResponseBodyPost =
  | {
      user: User;
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
  const result = userSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.issues },
      {
        status: 400,
      },
    );
  }

  // 3. Check if user already exist in the database
  const user = await getUserByUsernameInsecure(result.data.username);

  if (user) {
    return NextResponse.json(
      { errors: [{ message: 'username is already taken' }] },
      { status: 403 },
    );
  }

  // const password = undefined;

  // 4. Hash the plain password from the user
  const passwordHash = await bcrypt.hash(result.data.password, 12);

  // 5. Save the user information with the hashed password in the database
  const newUser = await createUserInsecure(
    result.data.firstName,
    result.data.lastName,
    result.data.username,
    result.data.email,
    passwordHash,
  );
  console.log('User: ', newUser);
  if (!newUser) {
    return NextResponse.json(
      { errors: [{ message: 'Error creating the new user' }] },
      { status: 500 },
    );
  }

  return NextResponse.json({
    user: newUser,
  });
}
