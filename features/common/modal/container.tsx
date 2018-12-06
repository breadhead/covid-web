import * as React from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Action, AnyAction, Dispatch } from 'redux'

import { State } from '@app/lib/store'
import withLockScroll from '@breadhead/with-scroll-lock'

import { ModalDispatcher } from './helpers/ModalDispatcher'
import { shouldOpenModal } from './helpers/shouldModalOpen'
import styles from './index.css'
import Layout from './organisms/Layout'
import { actions } from './reducer'
import { getModal } from './selectors'
import withModal from './withModal'

interface Props {
  modal: string,
  close: () => Action,
  bodyScrolling: { lock: () => void, unlock: () => void }
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

    const ModalComponent = this.getModalComponent(modal)

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

  private handleScrollLock = (modal: string) => {
    const { bodyScrolling } = this.props
    const { lock, unlock } = bodyScrolling

    if (shouldOpenModal(modal)) {
      lock()
    } else {
      unlock()
    }
  }

  private getModalComponent = (modal: string) => {
    const SpecificModal = ModalDispatcher.getInstance().components[modal]

    return SpecificModal
      ? withModal(SpecificModal)
      : null
  }
}

const mapState = (state: State) => ({
  modal: getModal(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  close: () => dispatch(actions.close()),
})

const hoc = compose<Props, {}>(
  connect(mapState, mapDispatch),
  withLockScroll(true),
)

export default hoc(Modal)
