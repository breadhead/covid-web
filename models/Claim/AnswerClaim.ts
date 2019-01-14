export interface AnswerClaim {
  id: string
  defaultQuestions: Question[]
  additionalQuestions: Question[]
}

export interface Question {
  question: string
  answer?: string
}
