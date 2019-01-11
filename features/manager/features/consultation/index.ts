import Container from './container'
import Page from './page'

export default Container(Page as any) // TODO: fix it

export { getClaimId } from './selectors'
export { State, reducer } from './reducer'
