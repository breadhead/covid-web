import {
  RatingQuestionI,
  RatingQuestionServerI,
} from '../../organisms/RatingQuestion/types/RatingQuestionI'
import { RatingQuestionType } from '../../organisms/RatingQuestion/types/RatingQuestionType'

export const mapRatingQuesitons = (
  questions: RatingQuestionServerI[],
): RatingQuestionI[] => {
  return questions.map(q => ({
    id: q.id,
    order: q._order,
    type: q._type as RatingQuestionType,
    question: q._question,
    hint: q._hint,
  }))
}
