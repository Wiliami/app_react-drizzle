import { FastifyInstance } from 'fastify'
import { createUserBodySchema } from '../../validators/user-chema'
import { getStudents } from '../../functions/get-users'
import { createUser } from '../../functions/create-user'

export async function users(app: FastifyInstance) {
    app.get('/students', async (req, reply) => {
        
        const students = await getStudents();

        reply.send({ students });
    })

    app.post('/users', async (req, reply) => {
        const { name, email, age } = createUserBodySchema.parse(req.body);
 
        const user = createUser({ name, email, age });

        reply.send({ user });
    })
}