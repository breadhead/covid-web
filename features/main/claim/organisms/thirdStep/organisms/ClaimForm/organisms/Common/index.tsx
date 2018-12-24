import * as React from 'react'

import { StylesType } from '@app/lib/config'
import Checkbox from '@app/ui/atoms/Checkbox'

interface Props {
  styles: StylesType
}

const Common = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Общие вопросы</h2>
    <Checkbox className={styles.checkbox} name="common-chronic">
      <span className={styles.checkboxLabel}>
        Есть ли у вас хронические заболевания?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="common-tumor">
      <span className={styles.checkboxLabel}>
        Имеется ли распространение опухоли за пределы органа?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="common-stage">
      <span className={styles.checkboxLabel}>
        Какая стадия опухолевого процесса, и что это значит?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="common-methods">
      <span className={styles.checkboxLabel}>
        Какие методы лечения доступны в моей ситуации?
        <br />
        Какое лечение вы рекомендуете и почему?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="common-add-surveys">
      <span className={styles.checkboxLabel}>
        Необходимо ли пройти дополнительные обследования до начала лечения?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="common-specialists">
      <span className={styles.checkboxLabel}>
        К каким специалистам мне дополнительно необходимо обратиться?
      </span>
    </Checkbox>
  </article>
)

export default Common
