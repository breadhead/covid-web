import Container from './container';
import FeedbackForm from './FeedbackForm';

export default Container(FeedbackForm as any);

export { reducer } from '../../../../../../domain/reducers/feedbackReducer/reducer';
export type { State } from '../../../../../../domain/reducers/feedbackReducer/reducer';
export { sendFeedback } from '../../../../../../domain/reducers/feedbackReducer/actions';
