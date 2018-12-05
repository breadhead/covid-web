import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { actions } from './reducer'

export interface WithModalProps {
  modal: {
    open: (modal: string) => void,
    close: () => void,
  }
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  modal: {
    open: (modal: string) => dispatch(actions.open(modal)),
    close: () => dispatch(actions.close()),
  },
} as WithModalProps)

export default connect(null, mapDispatch)
