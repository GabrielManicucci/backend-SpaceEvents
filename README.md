## This is a email sending API developed with [Fastify](https://fastify.dev/) in NodeJS and with the [Nodemailer](https://nodemailer.com/) email sending library

## Getting Started

First, run the development server:

```bash
npm run dev
```
Then you will have a '/sendEmail' route running at http://localhost:3333 that it will be responsible route for email sending
that way: 
```bash
http://localhost:3333/sendEmail
```
However, for this route work it will be need to make some nodemailer settings. For this route to work you need to put your gmail details and password for your gmail account in the .env file
that way: 
```env
ODE_ENV="development"
EMAIL="your email"
PASSWORD="your password"
PORT=3333
```
Finnaly, open insomnia create one request http post with http://localhost:3333/sendEmail route and send a json like that:
```json
{
  "user": "yourUser",
	"email": "yourEmail@gmail.com",
	"number": "yourNumber",
	"textarea": "yourMEssage"
}
```
## Learn More

To learn more about NodeJS, fastify and nodemailer take a look at the following resources:

- [NodeJS documentation](https://nodejs.org/en) - learn about NodeJS features and API.
- [Fastify ocumentation](https://fastify.dev/) - NodeJS framework.
- [Nodemailer documentation](https://nodemailer.com/) - Email sending library.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy

Deploy done in [Render](https://render.com/)
