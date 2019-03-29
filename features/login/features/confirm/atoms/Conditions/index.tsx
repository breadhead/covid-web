import React from 'react'

import * as styles from './Conditions.css'

import { NavLink } from '@front/ui/nav-link'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const Conditions = () => (
  <p className={styles.description}>
    Пожалуйста, введите ваш номер мобильного телефона, и{NON_BREAKING_SPACE}мы
    {NON_BREAKING_SPACE}вышлем на{NON_BREAKING_SPACE}него СМС с
    {NON_BREAKING_SPACE}кодом для подтверждения согласия с{NON_BREAKING_SPACE}
    <NavLink
      blank
      href="/static/docs/personal-data-processing-policy.pdf"
      className={styles.link}
    >
      политикой обработки персональных данных
    </NavLink>
  </p>
)

export default Conditions
