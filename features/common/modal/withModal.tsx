import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { actions } from './reducer'

interface ModalProps {
  open: (modal: string) => void
  close: () => void
}

export interface WithModalProps {
  modal: ModalProps
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) =>
  ({
    modal: {
      open: (modal: string) => dispatch(actions.open(modal)),
      close: () => dispatch(actions.close()),
    },
  } as WithModalProps)

export default connect(
  null,
  mapDispatch,
)
