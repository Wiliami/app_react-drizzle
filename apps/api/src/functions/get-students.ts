import { db } from "../db";
import { studentsTable } from "../db/schema";

export async function getStudents() {
    const students = await db.select().from(studentsTable);

    return students;
}