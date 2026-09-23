import { FastifyInstance } from 'fastify'
import { createStudentBodySchema } from '../../validators/user-chema'
import { getStudents } from '../../functions/get-students'
import { createStudent } from '../../functions/create-user'

export async function students(app: FastifyInstance) {
    app.get('/students', async (req, reply) => {
        
        const students = await getStudents();

        reply.send({ students });
    })

    app.post('/students', async (req, reply) => {
        const { name, email, age } = createStudentBodySchema.parse(req.body);
 
        const student = await createStudent({ name, email, age });

        reply.send({ student });
    })
}