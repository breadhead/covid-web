import Container from './container';
import FeedbackForm from './FeedbackForm';

export default Container(FeedbackForm as any);

export { reducer } from './reducer';
export type { State } from './reducer';
export { sendFeedback } from './actions';
