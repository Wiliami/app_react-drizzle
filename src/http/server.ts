import Fastify from 'fastify'
import { users } from './routes/users'

const fastify = Fastify({
  logger: {
    transport: {
      target: "@fastify/one-line-logger",
    }
  }
})

fastify.register(users)

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})