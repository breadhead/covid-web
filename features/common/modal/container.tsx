import * as React from 'react'
import ReactModal from 'react-modal'
import { connect, Matching } from 'react-redux'
import { compose } from 'recompose'
import { Action, AnyAction, Dispatch } from 'redux'

import { SmsConfirmModal } from '@app/features/login'
import { State } from '@app/lib/store'
import withLockScroll from '@breadhead/with-scroll-lock'

import { shouldOpenModal } from './helpers/shouldModalOpen'
import styles from './index.css'
import MainLogin from './modals/MainLogin'
import MainSignUp from './modals/MainSignUp'
import Layout from './organisms/Layout'
import { ModalState } from './reducer'
import { actions } from './reducer'
import { getModal } from './selectors'
import withModal, { WithModalProps } from './withModal'

interface Props {
  modal: ModalState,
  close: () => Action,
  bodyScrolling: { lock: () => void, unlock: () => void }
}

type ModalComponentType = React.ComponentType<Matching<WithModalProps, WithModalProps>>
  | React.StatelessComponent<WithModalProps>

type ModalsMap = {
  [key in keyof typeof ModalState]: ModalComponentType | null
}

// TODO: place real modals here
const modalsMap: ModalsMap = {
  [ModalState.mainSignUp]: MainSignUp,
  [ModalState.mainLogin]: MainLogin,
  [ModalState.mainSMS]: SmsConfirmModal,
  [ModalState.adminLogin]: null,
  [ModalState.adminSignUp]: null,
  [ModalState.empty]: null,
}
class Modal extends React.Component<Props> {

  public componentDidUpdate({ modal: prevModal }: Props) {
    const { modal } = this.props
    if (modal !== prevModal) {
      this.handleScrollLock(modal)
    }
  }

  public render() {
    const { modal, close } = this.props

    const SpecificModal = modalsMap[modal]

    const ModalComponent = SpecificModal
      ? withModal(SpecificModal)
      : null

    return (
      <ReactModal
        shouldCloseOnOverlayClick
        className={styles.Modal}
        isOpen={shouldOpenModal(modal)}
        onRequestClose={close}
      >
        <Layout closePopup={close}>
          {ModalComponent && <ModalComponent />}
        </Layout>
      </ReactModal>
    )
  }

  private handleScrollLock = (modal: ModalState) => {
    const { bodyScrolling } = this.props
    const { lock, unlock } = bodyScrolling

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

const hoc = compose(
  connect(mapState, mapDispatch),
  withLockScroll(true),
)

export default hoc(Modal)
