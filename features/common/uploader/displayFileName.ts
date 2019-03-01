export const displayFileName = (fileName: string) => {
  const start = fileName.length - 15
  return fileName.slice(start)
}
