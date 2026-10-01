import z from "zod";

export const createStudentBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    age: z.number()
})