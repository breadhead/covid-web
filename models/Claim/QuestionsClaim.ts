export interface QuestionsClaim {
  id: string
  defaultQuestions: string[]
  additionalQuestions: string[]
}

export interface Question {
  label: string
  list: string[]
}
