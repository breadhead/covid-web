import * as React from 'react'

import { SPACE, StylesType } from '@app/lib/config'

interface Props {
  styles: StylesType
}

const History = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>История болезни</h2>
    <div className={styles.common}>
      <div className={styles.infoBlock}>
        <h3 className={styles.subtitle}>Дата онкологичкского диагноза?</h3>
        <p className={styles.text}>Апрель 2015</p>
      </div>
      <div className={styles.infoBlock}>
        <h3 className={styles.subtitle}>В каком городе?</h3>
        <p className={styles.text}>г. Санкт-Петербург</p>
      </div>
      <div className={styles.infoBlock}>
        <h3 className={styles.subtitle}>Название клиники</h3>
        <p className={styles.text}>
          ГБУЗ «Санкт-Петербургский клинический научно-практический центр
          специализированных видов{SPACE}
          медицинской помощи (онкологический)»
        </p>
      </div>
      <div className={styles.infoBlock}>
        <h3 className={styles.subtitle}>ФИО врача</h3>
        <p className={styles.text}>Камышев Игорь Викторович</p>
      </div>
      <div className={styles.infoBlock}>
        <h3 className={styles.subtitle}>Как вас лечили в этой клинике?</h3>
        <p className={styles.text}>
          Самостоятельно до обращения в больницу не лечился. Были назначены
          антибиотики, витаминотерапия,{SPACE}
          физиолечение. После лечения стало легче: прошла температура, кашель,
          слабость. 20 октября произошло{SPACE}
          обострение снова появился кашель с отхождением гнойной мокроты
          слабость, недомогание, боли в грудной клетке.
        </p>
      </div>
    </div>
  </article>
)

export default History
