export const getStars = (count: string) => {
  const arr = []
  for (let i = 0; i < Number(count); i++) {
    arr.push('⭐')
  }

  return arr.join(' ')
}
