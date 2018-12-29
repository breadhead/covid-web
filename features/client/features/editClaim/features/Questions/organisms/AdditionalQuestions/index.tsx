import * as React from 'react'

import { TextArea } from '@app/features/common/form'
import { StylesType } from '@app/lib/config'

interface Props {
  styles: StylesType
}

const AdditionalQuestions = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>У вас есть еще вопросы?</h2>
    <label htmlFor="additionalQuestions" className={styles.label}>
      Ваши дополнительные вопросы
    </label>
    <TextArea name="additionalQuestions.[0]" />
  </article>
)

export default AdditionalQuestions
