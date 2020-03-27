export function showIntercom() {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname

    if (pathname.includes('/request/chat')) {
      ;(window as any).Intercom('show')
    }
  }
}
