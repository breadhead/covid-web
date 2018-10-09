import { connect } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { State } from '@app/lib/store'

import Examples from './organisms/Examples'
import { getAll } from './selectors'
import { actions } from './reducer';

const mapStateToProps = (state: State) => getAll(state)

const mapDipatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  inc: () => dispatch(actions.increment()),
  dec: () => dispatch(actions.decrement()),
  reset: () => dispatch(actions.reset()),
})

export default connect(mapStateToProps, mapDipatchToProps)(Examples)