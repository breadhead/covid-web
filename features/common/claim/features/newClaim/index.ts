import Container from './container'
import Page from './page'
export default Container(Page as any)

export { reducer, State, actions } from './reducer'

export { fetchShortClaim } from './actions'

export { FooterType } from './organisms/ClaimForm'
