// Netlify Function (example) - Node.js
exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' }
  }
  const body = event.body ? JSON.parse(event.body) : {}
  const { name, email, message } = body
  if (!name || !email || !message) {
    return { statusCode: 400, body: 'Missing fields' }
  }
  // TODO: forward to email provider or store in DB
  console.log('Netlify contact', { name, email, message })
  return { statusCode: 200, body: JSON.stringify({ status: 'ok' }) }
}