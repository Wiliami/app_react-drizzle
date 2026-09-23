import 'dotenv/config';
import { studentsTable } from '../db/schema';
import { db } from '../db';

export async function createStudent({ name, email, age }) {
  const student = { name, email, age };

  const data = await db.insert(studentsTable).values(student);

  return data;
}