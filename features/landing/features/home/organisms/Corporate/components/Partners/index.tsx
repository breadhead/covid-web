import * as React from 'react'

import * as styles from './Partners.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import { ButtonSize } from '@front/ui/button'
import { NavLink } from '@front/ui/nav-link'
import StartConsultationButton from '../../../../molecules/StartConsultationButton'
import PartnersList from './components/PartnersList'
import Count from './components/Count'

const Partners = () => (
  <article className={styles.partners}>
    <h2 className={styles.title}>
      Консультации проводятся на{NON_BREAKING_SPACE}пожертвования физических лиц
      и{NON_BREAKING_SPACE}компаний-партнёров
    </h2>
    <Count />
    <PartnersList />
    <NavLink className={styles.link} href="/partners">
      Посмотреть всех партнёров
    </NavLink>
    <StartConsultationButton
      containerClassName={styles.buttonContainer}
      className={styles.button}
      size={ButtonSize.ExtraLarge}
    >
      Начать консультацию
    </StartConsultationButton>
  </article>
)

export default Partners
