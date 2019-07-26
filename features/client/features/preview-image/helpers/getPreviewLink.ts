export const getPreviewLink = (link: string) => {
  const imageRegexp = /.*\.(gif|jpe?g|bmp|png)$/gim

  if (imageRegexp.test(link)) {
    return `/preview-image/${encodeURIComponent(link)}`
  }

  return link
}
