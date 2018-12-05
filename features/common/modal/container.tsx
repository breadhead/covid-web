import withLockScroll from '@app/features/common/lockScroll'
import { State } from '@app/lib/store'
import * as React from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Action, AnyAction, Dispatch } from 'redux'
import { shouldOpenModal } from './helpers/shouldModalOpen'
import styles from './index.css'
import MainLogin from './modals/MainLogin'
import MainSignUp from './modals/MainSignUp'
import Layout from './organisms/Layout'
import { ModalState } from './reducer'
import { actions } from './reducer'
import { getModal } from './selectors'

interface Props {
  modal: ModalState,
  close: () => Action,
  lock: any,
  unlock: any
}

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
class Modal extends React.Component<Props> {

  public componentDidUpdate({ modal: prevModal }) {
    const { modal, bodyScrolling: { lock, unlock } } = this.props
    if (modal !== prevModal) {
      this.handleScrollLock(modal, lock, unlock)
    }
  }

  public render() {
    const { modal, close } = this.props
    return <ReactModal
      shouldCloseOnOverlayClick
      className={styles.Modal}
      isOpen={shouldOpenModal(modal)}
      onRequestClose={close}
    >
      <Layout closePopup={close}>
        {modalsMap[modal]}
      </Layout>
    </ReactModal>
  }

  private handleScrollLock = (modal: ModalState, lock: any, unlock: any) => {
    if (shouldOpenModal(modal)) {
      lock()
    } else {
      unlock()
    }
  }
}

const mapState = (state: State) => ({
  modal: getModal(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  close: () => dispatch(actions.close()),
})

const hoc = compose(connect(mapState, mapDispatch), withLockScroll(true))

export default hoc(Modal)
