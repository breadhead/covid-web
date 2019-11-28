import { getStars } from '../../../helpers/getStars'

export const getDataSource = (
  data: {
    [key: string]: {
      count: number
      percentage: string
    }
  }[],
  questionId: string,
) => {
  const source = Object.entries(data)
    .map(([_, value]) =>
      Object.entries(value as any).map(([key, val]) => ({
        key: `${questionId} ${key} ${val}`,
        starsCount: `${key}. ${getStars(key)}`,
        answersCount: (val as any).count,
        proportion: `${(val as any).percentage} %`,
      })),
    )
    .map(el => el[0])

  return source
}
