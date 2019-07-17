interface Answer {
  question: string
  answer: string
}

export interface AnswerRequest {
  claimId: string
  answers: Answer[]
  pre: boolean
}
