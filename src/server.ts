import fastify from 'fastify'
import 'dotenv/config'
import { env } from './env'
import { sendEmailRoutes } from './routes/sendEmail'
import fastifyCors from '@fastify/cors'

const app = fastify()
app.register(fastifyCors)
app.register(sendEmailRoutes)

app
  .listen({
    port: env.PORT,
    host: 'RENDER' in process.env ? `0.0.0.0` : `localhost`,
  })
  .then(() => console.log('http server running on http://localhost:3333'))
