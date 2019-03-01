export const displayFileName = (fileName: string) => {
  const underscorePosition = fileName.indexOf('_')

  const position =
    underscorePosition === -1 ? fileName.length - 16 : underscorePosition

  return fileName.slice(position + 1)
}
