import { State } from '@app/lib/store'
import * as React from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { Action, AnyAction, Dispatch } from 'redux'
import { shouldOpenModal } from './helpers/shouldModalOpen'
import styles from './index.css'
import MainLogin from './modals/MainLogin'
import MainSignUp from './modals/MainSignUp'
import Layout from './organisms/Layout'
import { ModalState } from './reducer'
import { actions } from './reducer'
import { getModal } from './selectors'

interface Props { modal: ModalState, close: () => Action }

interface ModalsMap {
  [key: string]: (() => JSX.Element) | null,
}
const modalsMap: ModalsMap = {
  mainSignUp: MainSignUp,
  mainLogin: MainLogin,
  mainSMS: null,
  adminLogin: null,
  adminSignUp: null,
  empty: null,
}
const Modal = ({ modal, close }: Props) => <ReactModal
  shouldCloseOnOverlayClick
  className={styles.Modal}
  isOpen={shouldOpenModal(modal)}
  onRequestClose={close}
>
  <Layout closePopup={close}>
    {modalsMap[modal]}
  </Layout>
</ReactModal>

const mapState = (state: State) => ({
  modal: getModal(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  close: () => dispatch(actions.close()),
})

export default connect(mapState, mapDispatch)(Modal)
