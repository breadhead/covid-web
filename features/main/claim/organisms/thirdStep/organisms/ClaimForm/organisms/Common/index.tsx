import * as React from 'react'

import { StylesType } from '@app/lib/config'
import Checkbox from '@app/ui/atoms/Checkbox'

interface Props {
  styles: StylesType
}

const Common = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Общие вопросы</h2>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="chronic" />
      Есть ли у вас хронические заболевания?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="tumor" />
      Имеется ли распространение опухоли за пределы органа?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="stage" />
      Какая стадия опухолевого процесса, и что это значит?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="methods" />
      Какие методы лечения доступны в моей ситуации?
      <br />
      Какое лечение вы рекомендуете и почему?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="add-surveys" />
      Необходимо ли пройти дополнительные обследования до начала лечения?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="specialists" />К каким
      специалистам мне дополнительно необходимо обратиться?
    </label>
  </article>
)

export default Common
