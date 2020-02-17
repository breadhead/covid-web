export const getValueFromFormContext = (context: any, treatment: string, value: string) => {
  return context.values[`${treatment}`].length > 0 &&
    context.values[`${treatment}`][0]
    ? context.values[`${treatment}`][0][`${value}`]
    : null

}