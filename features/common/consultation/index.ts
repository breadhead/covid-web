import Container from './container'
import Page from './page'

export default Container(Page as any)

export { default as ExpertAnswers } from './organisms/ExpertAnswers'

export { State, reducer } from './reducer'

export { getClaimId } from './selectors'
