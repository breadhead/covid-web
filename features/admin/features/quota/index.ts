import Container from './container'
import Page from './page'

export { reducer, State } from './reducer'
export default Container(Page)

export { fetchQuota } from './actions'
export { getQuota } from './selectors'