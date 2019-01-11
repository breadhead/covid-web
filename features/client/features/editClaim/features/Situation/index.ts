import Container from './container'
import Page from './page'

export default Container(Page)

export { reducer, State } from './reducer'

export { fetchSituationClaim } from './actions'

export { getSituationClaim } from './selectors'
