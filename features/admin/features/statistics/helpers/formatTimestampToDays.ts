export const formatTimestampToDays = (ms: number) => {
  const hours = Math.round(ms / 1000 / 60 / 60)
  return (hours / 24).toFixed(2)
}
