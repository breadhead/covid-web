import * as React from 'react'

import { StylesType } from '@app/lib/config'
import TextArea from '@app/ui/atoms/TextArea'

interface Props {
  styles: StylesType
}

const Questions = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>У вас есть еще вопросы?</h2>
    <label htmlFor="questions" className={styles.label}>
      Какая цель данного лечения?
    </label>
    <TextArea name="questions" />
  </article>
)

export default Questions
