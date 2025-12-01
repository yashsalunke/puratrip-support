// Vercel Serverless Function (example) - TypeScript
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed')
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).send('Missing fields')

  // TODO: validate/protect (recaptcha, rate-limit) and forward to email provider like SendGrid
  console.log('Contact message', { name, email, message })
  return res.status(200).json({ status: 'ok' })
}