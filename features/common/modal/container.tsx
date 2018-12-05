import { State } from '@app/lib/store'
import * as React from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { Action, AnyAction, Dispatch } from 'redux'
import { shouldOpenModal } from './helpers/shouldModalOpen'
import MainLogin from './modals/MainLogin'
import MainSignUp from './modals/MainSignUp'
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

const Modal = ({ modal, close }: Props) => {
  return <ReactModal
    shouldCloseOnOverlayClick
    isOpen={shouldOpenModal(modal)}
    onRequestClose={close}
  >
    {modalsMap[modal]}
  </ReactModal>
}

const mapState = (state: State) => ({
  modal: getModal(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  close: () => dispatch(actions.close()),
})

export default connect(mapState, mapDispatch)(Modal)
