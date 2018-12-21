import * as React from 'react'

import Checkbox from '@app/ui/atoms/Checkbox'

import { StylesType } from '@app/lib/config'

interface Props {
  styles: StylesType
}

const During = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Во время лечения</h2>
    <p className={styles.secondaryText}>
      Когда начнется лечение, вам необходимо знать чего ожидать и на что
      обратить внимание. Не все следующие вопросы могут быть полезны для вас, но
      стоит о них знать.
    </p>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="success" />
      Как мы поймем, успешно ли лечение?
    </label>
    <label className={styles.label}>
      <Checkbox className={styles.checkbox} name="sideeffects" />
      Каким образом я могу повлиять на побочные эффекты?
    </label>
  </article>
)

export default During
