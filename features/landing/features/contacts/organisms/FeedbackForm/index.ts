import Container from './container'
import FeedbackForm from './FeedbackForm'

export default Container(FeedbackForm as any)

export { reducer, State } from './reducer'
export { sendFeedback } from './actions'
