import * as React from 'react'

import Checkbox from '@app/ui/atoms/Checkbox'

import { NON_BREAKING_SPACE, StylesType } from '@app/lib/config'

interface Props {
  styles: StylesType
}

const During = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Во время лечения</h2>
    <p className={styles.secondaryText}>
      Когда начнется лечение, вам необходимо знать чего ожидать и
      {NON_BREAKING_SPACE}на{NON_BREAKING_SPACE}что обратить внимание. Не все
      следующие вопросы могут быть полезны для вас, но{NON_BREAKING_SPACE}стоит
      о них знать.
    </p>
    <Checkbox className={styles.checkbox} name="during-success">
      <span className={styles.checkboxLabel}>
        Как мы поймем, успешно ли лечение?
      </span>
    </Checkbox>
    <Checkbox className={styles.checkbox} name="during-sideeffects">
      <span className={styles.checkboxLabel}>
        Каким образом я могу повлиять на побочные эффекты?
      </span>
    </Checkbox>
  </article>
)

export default During
