import {
  RatingQuestionI,
  RatingQuestionServerI,
} from '../../organisms/RatingQuestion/RatingQuestionI'
import { RatingQuestionType } from '../../organisms/RatingQuestion/RatingQuestionType'

export const mapRatingQuesitons = (
  questions: RatingQuestionServerI[],
): RatingQuestionI[] => {
  return questions.map(q => ({
    id: q.id,
    type: q._type as RatingQuestionType,
    question: q._question,
    hint: q._hint,
  }))
}
