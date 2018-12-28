import * as React from 'react'

import Checkbox from '@app/ui/atoms/Checkbox'

import { StylesType } from '@app/lib/config'

interface Props {
  styles: StylesType
}

const After = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>После лечения</h2>
    <Checkbox className={styles.checkbox} name="after-diet">
      <span className={styles.checkboxLabel}>
        Необходима ли особая диета после лечения?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="after-restrictions">
      <span className={styles.checkboxLabel}>
        Какие существуют ограничения в обыденной жизни?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="after-symptoms">
      <span className={styles.checkboxLabel}>
        На какие симптомы стоит обращать внимание?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="after-sequence">
      <span className={styles.checkboxLabel}>
        Какая последовательность обследований после лечения?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="after-relapse">
      <span className={styles.checkboxLabel}>
        Как мы узнаем о рецидиве болезни? За чем я должен следить?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="after-tactics">
      <span className={styles.checkboxLabel}>Какова тактика при рецидиве?</span>
    </Checkbox>
  </article>
)

export default After
