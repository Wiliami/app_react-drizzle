import { FastifyInstance } from 'fastify'
import { createUserBodySchema } from '../../validators/user-chema'
import { getUsers } from '../../functions/get-users'
import { createUser } from '../../functions/create-user'

export async function users(app: FastifyInstance) {
    app.get('/users', async (req, reply) => {
        const users = await getUsers();
        reply.send({ users });
    })

    app.post('/users', async (req, reply) => {
        const { name, email, age } = createUserBodySchema.parse(req.body);
 
        const user = createUser({ name, email, age });

        reply.send({ user });
    })
}