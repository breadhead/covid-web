import React from 'react'

import { NON_BREAKING_SPACE } from '@app/lib/config'

import * as styles from './Conditions.css'

const Conditions = () => (
  <p className={styles.description}>
    Пожалуйста, введите ваш номер мобильного телефона, и мы вышлем на него СМС с
    кодом для подтверждения согласия с{NON_BREAKING_SPACE}
    <a href="/conditions">условиями обработки личных данных</a>
  </p>
)

export default Conditions
