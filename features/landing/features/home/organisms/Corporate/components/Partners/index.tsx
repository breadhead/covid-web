import * as React from 'react'

import * as styles from './Partners.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import NavLink from '@app/ui/atoms/NavLink'
import StartConsultationButton from '../../../../molecules/StartConsultationButton'
import PartnersList from './components/PartnersList'

const Partners = () => (
  <article className={styles.partners}>
    <h2 className={styles.title}>
      Консультации проводятся на{NON_BREAKING_SPACE}пожертвования физических лиц
      и{NON_BREAKING_SPACE}компаний-партнёров
    </h2>
    <p className={styles.subtitle}>
      На 2019 год запланировано 5000 консультаций
    </p>
    {/* TODO: <Count /> */}
    <PartnersList />
    <NavLink className={styles.link} href="/partners">
      Посмотреть всех партнёров
    </NavLink>
    <StartConsultationButton className={styles.button}>
      Начать консультацию
    </StartConsultationButton>
  </article>
)

export default Partners
