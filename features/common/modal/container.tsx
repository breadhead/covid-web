import cx from 'classnames'
import * as React from 'react'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Action, AnyAction, Dispatch } from 'redux'

import { State } from '@app/lib/store'
import withLockScroll from '@breadhead/with-scroll-lock'

import { MOBILE_WIDTH } from '@app/lib/config'
import CloseButton from './atoms/CloseButton'
import { ModalDispatcher } from './helpers/ModalDispatcher'
import { shouldOpenModal } from './helpers/shouldModalOpen'
import styles from './index.css'
import { actions } from './reducer'
import { getModal } from './selectors'

interface Props {
  modal: string
  close: () => Action
  bodyScrolling: { lock: () => void; unlock: () => void }
  className?: string
}

class Modal extends React.Component<Props> {
  public componentDidUpdate({ modal: prevModal }: Props) {
    const { modal } = this.props
    if (modal !== prevModal) {
      this.handleScrollLock(modal)
    }
  }

  public render() {
    const { modal, close, className } = this.props

    const ModalComponent = this.getModalComponent(modal)

    return (
      <>
        <ReactModal
          shouldCloseOnOverlayClick
          className={cx(styles.Modal, className)}
          isOpen={shouldOpenModal(modal)}
          onRequestClose={close}
          ariaHideApp={false}
        >
          <CloseButton onClick={close} />
          {ModalComponent && <ModalComponent />}
        </ReactModal>
      </>
    )
  }

  private handleScrollLock = (modal: string) => {
    const { bodyScrolling } = this.props
    const { lock, unlock } = bodyScrolling

    const isSafariBrowser = window.navigator.userAgent.includes('Safari')

    if (shouldOpenModal(modal)) {
      lock()
      // TODO: update @breadhead/with-scroll-lock
      document.body.style.position = 'static'
      if (isSafariBrowser && window.innerWidth < MOBILE_WIDTH) {
        document.body.style.position = 'fixed'
      }
    } else {
      document.body.style.position = 'static'
      unlock()
    }
  }

  private getModalComponent = (modal: string) =>
    ModalDispatcher.getInstance().components[modal]
}

const mapState = (state: State) => ({
  modal: getModal(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  close: () => dispatch(actions.close()),
})

const hoc = compose<Props, {}>(
  connect(
    mapState,
    mapDispatch,
  ),
  withLockScroll(),
)

export default hoc(Modal)
