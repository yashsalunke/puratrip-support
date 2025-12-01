export const initGA = (measurementId?: string) => {
  if (!measurementId) return
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  ;(window as any).dataLayer = (window as any).dataLayer || []
  function gtag(){(window as any).dataLayer.push(arguments)}
  ;(window as any).gtag = gtag
  gtag('js', new Date())
  gtag('config', measurementId)
}