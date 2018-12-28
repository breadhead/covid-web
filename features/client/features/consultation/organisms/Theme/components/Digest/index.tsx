import * as React from 'react'
import * as customStyles from './Digest.css'

import cx from 'classnames'

import { StylesType } from '@app/lib/config'
import { ShortClaim } from '@app/models/Claim/ShortClaim'

interface OwnProps {
  styles: StylesType
}

type Props = OwnProps & ShortClaim

const Digest = ({
  styles,
  target,
  theme,
  personalData,
  localization,
  company,
}: Props) => (
  <article className={cx(styles.article, customStyles.digest)}>
    <h2 className={styles.title}>Кратко о теме консультации</h2>
    <div className={styles.content}>
      <div className={styles.common}>
        <div className={styles.infoBlock}>
          <h3 className={styles.subtitle}>Для кого эта консультация</h3>
          <p className={styles.text}>{target}</p>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.subtitle}>Тема вопроса</h3>
          <p className={styles.text}>{theme}</p>
        </div>
        {localization && (
          <div className={styles.infoBlock}>
            <h3 className={styles.subtitle}>Локализация опухоли</h3>
            <p className={styles.text}>{localization}</p>
          </div>
        )}
        {company && (
          <>
            <div className={styles.infoBlock}>
              <h3 className={styles.subtitle}>Корпоративная программа</h3>
              <p className={styles.text}>{company.name}</p>
            </div>
            <div className={styles.infoBlock}>
              <h3 className={styles.subtitle}>Должность и департамент</h3>
              <p className={styles.text}>{company.position}</p>
            </div>
          </>
        )}
      </div>
      <div>
        <h3 className={styles.subtitle}>Заказчик</h3>
        <p className={styles.text}>{personalData.name}</p>
        <p className={styles.text}>{personalData.gender}</p>
        <p className={styles.text}>{personalData.age} лет</p>
        {/* 23 лет ВАААТ? */}
        <p className={styles.text}>{personalData.region}</p>
        {personalData.email && (
          <p className={styles.text}>{personalData.email}</p>
        )}
        {personalData.phone && (
          <p className={styles.text}>{personalData.phone}</p>
        )}
      </div>
    </div>
  </article>
)

export default Digest
