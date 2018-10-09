import { connect } from 'react-redux'

import { State } from '@app/lib/store'

import Examples from './organisms/Examples'

const mapStateToProps = (state: State) => ({
  lastUpdate: state.lastUpdate,
  light: state.light,
})

export default connect(mapStateToProps)(Examples)