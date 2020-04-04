import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { AnyAction, Dispatch } from 'redux';

import { SendFeedbackRequest } from '@app/src/lib/api/request/SendFeedback';
import { push } from '@app/src/features/common/toast';

import { sendFeedback } from './actions';
import { Props as PageProps } from './FeedbackForm';

interface Props {
  send: (feedbackFields: SendFeedbackRequest) => Promise<any>;
  claimNumber: string;
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class ContaineredComponent extends React.Component<Props> {
    public render() {
      return (
        <WrappedComponent onFormSubmit={this.onFormSubmit} {...this.props} />
      );
    }

    public onFormSubmit = async (feedbackFields: SendFeedbackRequest) => {
      const { send } = this.props;
      await send(feedbackFields);
      push({
        message: 'Ваше сообщение успешно отправлено',
      });
    };
  };
};

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  send: (feedbackFields: SendFeedbackRequest) =>
    dispatch(sendFeedback(feedbackFields) as any),
});

export default compose(connect(null, mapDipatch), Container) as any;
