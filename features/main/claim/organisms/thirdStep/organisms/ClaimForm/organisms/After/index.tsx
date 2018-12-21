import * as React from 'react'

import Checkbox from '@app/ui/atoms/Checkbox'

import { StylesType } from '@app/lib/config'

interface Props {
  styles: StylesType
}

const After = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>После лечения</h2>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="diet" />
      Необходима ли особая диета после лечения?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="restrictions" />
      Какие существуют ограничения в обыденной жизни?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="symptoms" />
      На какие симптомы стоит обращать внимание?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="sequence" />
      Какая последовательность обследований после лечения?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="relapse" />
      Как мы узнаем о рецидиве болезни? За чем я должен следить?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="tactics" />
      Какова тактика при рецидиве?
    </label>
  </article>
)

export default After
