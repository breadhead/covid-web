import {connect} from 'react-redux'
import Clock from './clock'
import Counter from './counter'
import { State } from 'store'

interface Props {
  lastUpdate: number
  light: boolean
}

function Examples ({ lastUpdate, light }: Props) {
  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  )
}

function mapStateToProps (state: State) {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(Examples)
