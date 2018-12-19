import * as React from 'react'
import * as styles from '../../ClaimForm.css'

import TextArea from '@app/ui/atoms/TextArea'

import { SPACE } from '@app/lib/config'

const Health = () => (
  <article className={styles.article}>
    <h2 className={styles.title}>Ваше самочувствие</h2>
    <label htmlFor="common" className={styles.label}>
      Общее самочувствие.
      <span className={styles.sectondaryText}>
        {SPACE}Можете ли ходить, самостоятельно питаться, обслуживать себя?
      </span>
    </label>
    <TextArea name="common" id="common" />

    <label htmlFor="main" className={styles.label}>
      Что беспокоит больше всего?
    </label>
    <TextArea name="main" id="main" />

    <label htmlFor="common" className={styles.label}>
      Жалобы.
      <span className={styles.sectondaryText}>
        {SPACE}Если есть боли, недомогания, то какие? Когда начались, как долго
        длятся, с чем они по-вашему связаны?
        <br />
        Возникали ли эти жалобы ранее?
      </span>
    </label>
    <TextArea name="common" id="common" />
  </article>
)

export default Health
