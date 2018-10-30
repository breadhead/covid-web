import { actions } from './reducer'
export const authViolateStatus = (value: boolean) => actions.authViolateStatus(value)

import Container from './container'
import Form from './organisms/Form'
export default Container(Form)

export { reducer, State } from './reducer'
export { login } from './actions'
export { unauthorizedMiddleware } from './middleware'
export { getViolateState } from './selectors'
