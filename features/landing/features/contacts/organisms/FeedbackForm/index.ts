import Container from './container'
import FeedbackForm from './FeedbackForm'

export default Container(FeedbackForm)

export { reducer, State } from './reducer'
export { sendFeedback } from './actions'
