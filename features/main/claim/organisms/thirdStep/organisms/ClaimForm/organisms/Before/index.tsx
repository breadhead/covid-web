import * as React from 'react'

import Checkbox from '@app/ui/atoms/Checkbox'

import { StylesType } from '@app/lib/config'

interface Props {
  styles: StylesType
}

const Before = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Перед лечением</h2>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="target" />
      Какая цель данного лечения?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="ready" />
      Что необходимо сделать, чтобы быть готовым к лечению?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="period" />
      Как долго будет проходить лечение?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="sideeffects" />
      Какие риски и побочные эффекты данного лечения? <br />
      Есть ли возможность их снизить?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="everydaylife" />
      Как данное лечение может отразиться на повседневной жизни?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="chance" />
      Каковы шансы, что опухоль может вернуться (рецидив) при данном типе
      лечения?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="noeffect" />
      Что делать, если лечение не даст эффекта или возникнет рецидив?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="children" />
      Смогу ли я иметь детей после данного лечения? <br />
      Смогу ли я заниматься сексом после этого лечения?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="futurechildren" />
      Что необходимо сделать, если я хочу иметь детей в будущем?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="symptoms" />О каких симптомах
      или побочных эффектах мне нужно знать прямо сейчас?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="restrictions" />
      Какие существуют ограничения в обыденной жизни?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="diet" />
      Необходимо ли изменить свой рацион питания?
    </label>
  </article>
)

export default Before
