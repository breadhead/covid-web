import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { actions, ModalState } from './reducer'

export interface WithModalProps {
  modal: {
    open: (modal: ModalState) => void,
    close: () => void,
  }
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  modal: {
    open: (modal: ModalState) => dispatch(actions.open(modal)),
    close: () => dispatch(actions.close()),
  },
} as WithModalProps)

export default connect(null, mapDispatch)
