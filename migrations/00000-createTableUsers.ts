import { Sql } from 'postgres';
import { z } from 'zod';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
};

export const userSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  username: z.string(),
  password: z.string().min(3),
});

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE users (
      id integer PRIMARY key generated always AS identity,
      first_name varchar(40) NOT NULL,
      last_name varchar(40) NOT NULL,
      email varchar(80) NOT NULL UNIQUE,
      username varchar(40) NOT NULL UNIQUE,
      password_hash varchar(120) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE users `;
}
