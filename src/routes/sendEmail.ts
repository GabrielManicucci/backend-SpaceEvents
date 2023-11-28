import { FastifyInstance } from 'fastify'
import nodemailer from 'nodemailer'
import { env } from '../env'
import { z } from 'zod'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: env.EMAIL,
    pass: env.PASSWORD,
  },
})

export async function sendEmailRoutes(app: FastifyInstance) {
  app.post('/sendEmail', async (request, reply) => {
    const bodySchema = z.object({
      user: z.string(),
      email: z.string(),
      number: z.string(),
      textarea: z.string(),
    })

    const { user, email, number, textarea } = bodySchema.parse(request.body)
    // console.log(request.body)

    const message = {
      from: env.EMAIL,
      to: env.EMAIL,
      replyTo: email,
      subject: 'Email do projeto SpaceEvents',
      html: `
        <h3>Email enviado por ${user}, ${email}, ${number}</h3>

        <p>${textarea}</p>
      `,
    }

    const returnObject = {
      message: 'email sent with sucessfull',
      requesBody: {
        user,
        email,
        number,
        textarea,
      },
    }

    try {
      const sendEmail = await transporter.sendMail(message)
      console.log(`Email enviado: ${sendEmail.response}`)
      reply.status(201).send(returnObject)
    } catch (error) {
      console.error(error)
      reply.status(500).send({ error: 'Internal Server Error' })
    }
  })
}
