import { Sql } from 'postgres';

const users = [
  {
    id: 1,
    firstName: 'Duane',
    lastName: 'Hansen',
    email: 'duane.hansen@example.com',
    username: 'wives',
    passwordHash: 'passat',
  },
  {
    id: 2,
    firstName: 'Gilbert',
    lastName: 'West',
    email: 'gilbert.west@example.com',
    username: 'presto',
    passwordHash: 'jason1',
  },
  {
    id: 3,
    firstName: 'Paula',
    lastName: 'Hall',
    email: 'paula.hall@example.com',
    username: 'chao',
    passwordHash: 'tyler1',
  },
  {
    id: 4,
    firstName: 'Sheila',
    lastName: 'Mills',
    email: 'sheila.mills@example.com',
    username: 'manolo',
    passwordHash: 'turkey',
  },
];

export async function up(sql: Sql) {
  for (const user of users) {
    await sql`
      INSERT INTO
        users (
          first_name,
          last_name,
          email,
          username,
          password_hash
        )
      VALUES
        (
          ${user.firstName},
          ${user.lastName},
          ${user.email},
          ${user.username},
          ${user.passwordHash}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const user of users) {
    await sql`
      DELETE FROM users
      WHERE
        id = ${user.id}
    `;
  }
}
