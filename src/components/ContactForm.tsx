import React, { useState } from 'react'

export default function ContactForm(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle')

  // If you set VITE_USE_NETLIFY=true in env, the form will submit to Netlify Forms.
  const useNetlify = import.meta.env.VITE_USE_NETLIFY === 'true'

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if(useNetlify){
      // For Netlify forms: let the browser submit the form normally
      const form = e.target as HTMLFormElement
      form.submit()
      return
    }
    setStatus('sending')
    try{
      const res = await fetch(import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if(res.ok){ setStatus('ok'); setName(''); setEmail(''); setMessage('') }
      else { setStatus('error') }
    }catch(e){ setStatus('error') }
  }

  return (
    <>
      {/* Visible React form (posts to Netlify when VITE_USE_NETLIFY=true) */}
      <form onSubmit={submit} name="contact" method={useNetlify ? 'POST' : 'POST'} data-netlify={useNetlify ? 'true' : undefined} netlify-honeypot={useNetlify ? 'bot-field' : undefined} className="space-y-4 bg-white dark:bg-gray-900/40 p-6 rounded-2xl border">
        {useNetlify && <input type="hidden" name="form-name" value="contact" />}
        {useNetlify && <p style={{display:'none'}}><label>Don’t fill: <input name="bot-field" /></label></p>}
        <div>
          <label className="text-sm font-medium">Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} required name="name" className="mt-1 block w-full rounded-md p-3" placeholder="Your name" />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" name="email" className="mt-1 block w-full rounded-md p-3" placeholder="you@example.com" />
        </div>
        <div>
          <label className="text-sm font-medium">Message</label>
          <textarea value={message} onChange={(e)=>setMessage(e.target.value)} required name="message" rows={4} className="mt-1 block w-full rounded-md p-3" placeholder="How can we help?" />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">We typically reply within 24–48 hours.</div>
          <button disabled={status==='sending'} className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg" type="submit">{status==='sending'?'Sending...':'Send Message'}</button>
        </div>
        {status==='ok' && <div className="text-sm text-green-600">Message sent — thanks!</div>}
        {status==='error' && <div className="text-sm text-red-600">Failed to send. Try again later.</div>}
      </form>

      {/* Fallback non-JS form for Netlify (ensures Netlify detects it) */}
      <noscript>
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thanks" style={{display:'none'}}>
          <input type="hidden" name="form-name" value="contact" />
          <p><label>Name <input name="name" /></label></p>
          <p><label>Email <input type="email" name="email" /></label></p>
          <p><label>Message <textarea name="message"></textarea></label></p>
        </form>
      </noscript>
    </>
  )
}