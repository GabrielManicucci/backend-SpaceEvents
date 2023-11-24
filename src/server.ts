import fastify from 'fastify'
import 'dotenv/config'
import { env } from './env'
import { sendEmailRoutes } from './routes/sendEmail'

const app = fastify()

app.register(sendEmailRoutes)

app
  .listen({ port: env.PORT })
  .then(() => console.log('http server running on http://localhost:3333'))
