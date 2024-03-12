import { cache } from 'react';
import { sql } from './connect';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
};

export type UserWithPasswordHash = User & {
  passwordHash: string;
};

export const getUser = cache(async (token: string) => {
  const [user] = await sql<Pick<User, 'username'>[]>`
    SELECT
      users.username
    FROM
      users
      INNER JOIN sessions ON (
        sessions.token = ${token}
        AND sessions.user_id = users.id
        AND sessions.expiry_timestamp > now()
      )
  `;
  return user;
});

export const getUserByUsernameInsecure = cache(async (username: string) => {
  const [user] = await sql<User[]>`
    SELECT
      id,
      first_name,
      last_name,
      email,
      username
    FROM
      users
    WHERE
      username = ${username.toLowerCase()}
  `;
  return user;
});

export const getUserWithPasswordHashByUsernameInsecure = cache(
  async (username: string) => {
    const [user] = await sql<UserWithPasswordHash[]>`
      SELECT
        *
      FROM
        users
      WHERE
        username = ${username.toLowerCase()}
    `;
    return user;
  },
);

export const createUserInsecure = cache(
  async (
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    passwordHash: string,
  ) => {
    const [user] = await sql<Pick<User, 'id' | 'username'>[]>`
      INSERT INTO
        users (
          first_name,
          last_name,
          username,
          email,
          password_hash
        )
      VALUES
        (
          ${firstName},
          ${lastName},
          ${username.toLowerCase()},
          ${email},
          ${passwordHash}
        )
      RETURNING
        id,
        username
    `;
    return user;
  },
);
