import React from 'react'

import { PhoneLink } from '@app/src/ui/phone-link/PhoneLink'

import styles from './ClearMorning.css'
import { NavLink } from '@app/src/ui/nav-link'

export const ClearMorning = () => {
  return (
    <div className={styles.container}>
      <img src="/static/images/partners/Yasnoe_utro_Logo.jpg" />
      <p className={styles.title}>
        Всероссийская горячая линия помощи онкологическим больным и их близким
      </p>
      <p className={styles.text}>
        Если вы чувствуете, что вам нужна поддержка, обратитесь на горячую линию{' '}
        <PhoneLink label="горячая линия помощи онкологическим больным и их близким">
          8 800 100-01-91
        </PhoneLink>
        . Бесплатно, круглосуточно, анонимно.
        <br />
        <br />
        Бесплатную психологическую и юридическую помощь онкологическим пациентам
        и их родным оказывает наш партнер{' '}
        <NavLink blank href="https://yasnoeutro.ru/">
          Служба «Ясное утро»
        </NavLink>
        .
      </p>
    </div>
  )
}
