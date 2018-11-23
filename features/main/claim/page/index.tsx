import * as React from 'react'
import * as styles from './Claim.css'

import ClaimForm from '../organisms/ClaimForm'

import Footer from '../../layout/organisms/Footer'
import Header from '../../layout/organisms/Header'

interface Props {
  title: string
  text?: string
}

const ClaimPage = ({ title, text }: Props) => {
  return (
    <React.Fragment>
      <Header type="medium" />
      <main className={styles.claimPage}>
        <h1 className={styles.title}>{title}</h1>
        {text && <p className={styles.infoText}>
          {text}
        </p>}
        <ClaimForm />
      </main>
      <Footer type="medium" />
    </React.Fragment>
  )
}

export default ClaimPage
