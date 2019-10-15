export const normalizeUrl = (url: string) => {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }

  if (url.startsWith('/preview-image')) {
    return url
  }

  return `http://${url}`
}
