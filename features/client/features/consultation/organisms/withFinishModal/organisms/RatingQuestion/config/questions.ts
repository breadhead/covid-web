import { RatingQuestionsEnum } from '../RatingQuestionsEnum'

export const questions = [
  {
    id: 1,
    code: RatingQuestionsEnum.Q1,
    hint: 'Подсказка к вопросу: 1 - очень долго, 10 - очень быстро',
    text: 'Оцените пожалуйста насколько быстро вы получили ответ эксперта',
  },
  {
    id: 2,
    code: RatingQuestionsEnum.Q2,
    hint:
      'Подсказка к вопросу: 1 - абсолютно непонятно, 10 - полностью понятно',
    text: 'Насколько понятен был ответ',
  },
  {
    id: 3,
    code: RatingQuestionsEnum.Q3,
    hint: 'Подсказка к вопросу: 1 - неполный, 10 - полный',
    text: 'Насколько полным был ответ',
  },
]
