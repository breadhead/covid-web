export interface RatingValueQuestion {
  question: string,
  order: number,
  answers: {
    [key: string]: {
      count: number
      percentage: string
    }
  }[]
}
