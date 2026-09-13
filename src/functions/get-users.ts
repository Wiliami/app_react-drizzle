import { db } from "../db";
import { usersTable } from "../db/schema";

export async function getUsers() {
    const users = await db.select().from(usersTable);

    return users;
}