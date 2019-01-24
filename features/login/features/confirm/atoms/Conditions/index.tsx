import React from 'react'

import * as styles from './Conditions.css'

import NavLink, { TargetType } from '@app/ui/atoms/NavLink'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const Conditions = () => (
  <p className={styles.description}>
    Пожалуйста, введите ваш номер мобильного телефона, и{NON_BREAKING_SPACE}мы
    {NON_BREAKING_SPACE}вышлем на{NON_BREAKING_SPACE}него СМС с
    {NON_BREAKING_SPACE}кодом для подтверждения согласия с{NON_BREAKING_SPACE}
    <NavLink
      className={styles.link}
      target={TargetType.Blank}
      href="/static/docs/personal-data-processing-policy.pdf"
    >
      условиями обработки личных данных
    </NavLink>
  </p>
)

export default Conditions
