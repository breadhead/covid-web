const MAX_LENGTH = 19
const BACKLASH = 5

export const displayFileName = (fileName: string) => {
  const underscorePosition = fileName.indexOf('_')

  const position =
    underscorePosition === -1 ? fileName.length - 16 : underscorePosition

  const realFileName = fileName.slice(position + 1)

  if (realFileName.length < MAX_LENGTH) {
    return realFileName
  }

  const start = realFileName.slice(0, MAX_LENGTH - BACKLASH)
  const end = realFileName.slice(realFileName.length - BACKLASH)

  return `${start}...${end}`
}
