import * as React from 'react'
import * as styles from './Claim.css'

import ClaimForm from '../organisms/ClaimForm'

import { actions as modalActions } from '@app/features/common/modal'
import { NON_BREAKING_SPACE } from '@app/lib/config'
import { connect } from 'react-redux'

import { ModalState } from '@app/features/common/modal/reducer'
import Footer from '@app/features/main/layout/organisms/Footer'
import Header from '@app/features/main/layout/organisms/Header'
import { AnyAction, Dispatch } from 'redux'

const ClaimPage = ({ openPopup, closePopup }) => {
  return (
    <React.Fragment>
      <Header type="secondary" />
      <button onClick={openPopup}>login popup</button>
      <button onClick={closePopup}>close popup</button>
      <main className={styles.claimPage}>
        <h1 className={styles.title}>Заполните заявку</h1>
        <p className={styles.infoText}>
          Личные данные будут использованы только для{NON_BREAKING_SPACE}консультации.
        </p>
        <ClaimForm />
      </main>
      <Footer type="secondary" />
    </React.Fragment>
  )
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  openPopup: () => dispatch(modalActions.open(ModalState.mainLogin)),
  closePopup: () => dispatch(modalActions.close()),
})

export default connect(null, mapDispatch)(ClaimPage)
