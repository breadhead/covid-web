import * as React from 'react'

import {
  getTargetQuestions,
  getThemeQuestions,
} from '@app/features/client/values'
import { Checkbox } from '@app/features/common/form'
import { StylesType } from '@app/lib/config'
import { Question } from '@app/models/Claim/QuestionsClaim'
import { QuestionsCategories } from '../../types'

interface Props {
  styles: StylesType
  category: QuestionsCategories
  criterion: string
}

type CategoriesSelectorMap = {
  [key in keyof typeof QuestionsCategories]: (criterion: string) => Question[]
}

const categorySelectorsMap: CategoriesSelectorMap = {
  target: getTargetQuestions,
  theme: getThemeQuestions,
}

const Questions = ({ styles, category, criterion }: Props) => {
  const questionsSelector = categorySelectorsMap[category]
  const sectionsList = questionsSelector(criterion)
  return (
    <>
      {!!sectionsList &&
        sectionsList.map(section => (
          <article key={section.label} className={styles.article}>
            <h2 className={styles.title}>{section.label}</h2>
            {section.list.map(question => (
              <Checkbox
                type="checkbox"
                className={styles.checkbox}
                key={question}
                name={`defaultQuestions[${section.label}: ${question}]`}
              >
                <span className={styles.checkboxLabel}>{question}</span>
              </Checkbox>
            ))}
          </article>
        ))}
    </>
  )
}
export default Questions
