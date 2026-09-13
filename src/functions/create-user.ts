import 'dotenv/config';
import { usersTable } from '../db/schema';
import { db } from '../db';

// use case
export async function createUser({ name, email, age }) {
  const user = { name, email, age };

  const data = await db.insert(usersTable).values(user);

  return data;
}