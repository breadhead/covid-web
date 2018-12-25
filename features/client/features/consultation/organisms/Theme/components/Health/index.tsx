import * as React from 'react'

import { SPACE, StylesType } from '@app/lib/config'

interface Props {
  styles: StylesType
}

const Health = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Самочувствие</h2>
    <div className={styles.common}>
      <div className={styles.infoBlock}>
        <h3 className={styles.subtitle}>Общее самочувствие</h3>
        <p className={styles.text}>
          Хожу, самостоятельно питаюсь, на строгой диете, с обслуживанием себя
          справляюсь без проблем
        </p>
      </div>
      <div className={styles.infoBlock}>
        <h3 className={styles.subtitle}>Что беспокоит больше всего?</h3>
        <p className={styles.text}>
          Продолжительный кашель, со временем появилась одышка. Боюсь даже идти
          делать рентген, чтобы{SPACE}
          не услышать, что это рецидив. Кровохарканья нет. Мокрота прозрачная.
          Болей в груди тоже нет.{SPACE}
          Иногда болит спина.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <h3 className={styles.subtitle}>Жалобы</h3>
        <p className={styles.text}>
          Все началось в августе 2017 года, сначала появилась слабость,
          повышенная температура тела 39, кашель{SPACE}с отхождением мокроты.
          Самостоятельно до обращения в больницу не лечился. Были назначены
          антибиотики, витаминотерапия, физиолечение. После лечения стало легче:
          прошла температура, кашель, слабость. 20{SPACE}
          октября произошло обострение снова появился кашель с отхождением
          гнойной мокроты слабость, недомогание,{SPACE}
          боли в грудной клетке.
        </p>
      </div>
    </div>
  </article>
)

export default Health
