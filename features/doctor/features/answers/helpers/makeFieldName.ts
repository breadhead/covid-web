export function makeFieldName(theme: string, question: string): any {
  const name = `${theme}: ${question}`

  return name.replace(/\./g, '')
}
