import * as React from 'react'

import { StylesType } from '@app/lib/config'

interface Props {
  styles: StylesType
}

const MedInfo = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Mедицинская информация</h2>
    <div className={styles.common}>
      <div className={styles.infoBlock}>
        <h3 className={styles.subtitle}>Хронические заболевания</h3>
        <p className={styles.text}>
          Хронический сухой кашель, свистящий звук во время дыхания, боль в
          грудной клетке при вдохе
        </p>
      </div>
      <div className={styles.infoBlock}>
        <h3 className={styles.subtitle}>
          Принимаемые на данный момент лекарства
        </h3>
        <p className={styles.text}>
          Бевацизумаб (Авастин), Доцетаксел, Доксорубицин
        </p>
      </div>
    </div>
  </article>
)

export default MedInfo
