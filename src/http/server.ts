import Fastify from 'fastify'
import cors from '@fastify/cors'
import { students } from './routes/students'

const fastify = Fastify({
  logger: {
    transport: {
      target: "@fastify/one-line-logger",
    }
  }
})

fastify.register(cors, {
  origin: 'http://localhost:5173',
  credentials: false,
})

fastify.register(students)

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})