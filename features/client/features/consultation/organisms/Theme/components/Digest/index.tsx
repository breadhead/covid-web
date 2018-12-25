import * as React from 'react'

import { StylesType } from '@app/lib/config'

interface Props {
  styles: StylesType
}

const Digest = ({ styles }: Props) => (
  <article className={styles.article}>
    <h2 className={styles.title}>Кратко о теме консультации</h2>
    <div className={styles.content}>
      <div className={styles.common}>
        <div className={styles.infoBlock}>
          <h3 className={styles.subtitle}>Для кого эта консультация</h3>
          <p className={styles.text}>Для меня</p>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.subtitle}>Тема вопроса</h3>
          <p className={styles.text}>Лечение и профилактика</p>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.subtitle}>Локализация опухоли</h3>
          <p className={styles.text}>Рак легких</p>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.subtitle}>Корпоративная программа</h3>
          <p className={styles.text}>Сбербанк</p>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.subtitle}>Должность и департамент</h3>
          <p className={styles.text}>
            Департамент маркетинга.
            <br /> Маркетолог
          </p>
        </div>
      </div>
      <div>
        <h3 className={styles.subtitle}>Заказчик</h3>
        <p className={styles.text}>Александр Васильевич</p>
        <p className={styles.text}>Мужчина</p>
        <p className={styles.text}>55 лет</p>
        <p className={styles.text}>г. Санкт-Петербург</p>
        <p className={styles.text}>konstantinopolsky@gmail.com</p>
        <p className={styles.text}>+7 960 749 18 96</p>
      </div>
    </div>
  </article>
)

export default Digest
