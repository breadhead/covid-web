const MAX_LENGTH = 30

export const truncateUrl = (url: string): string => {
  if (url.length <= MAX_LENGTH) {
    return url
  }

  return `${url.slice(0, MAX_LENGTH)}...`
}
