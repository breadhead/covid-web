import * as React from 'react';

import {SendFeedbackRequest} from '@app/src/lib/api/request/SendFeedback';
import {AppContext} from '@app/src/lib/server-types';

import {Props as PageProps} from './page';

interface Props {
  send: (feedbackFields: SendFeedbackRequest) => Promise<any>;
  claimNumber: string;
}

interface Query {
  claimNumber: string;
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class ContaineredComponent extends React.Component<Props> {
    public static async getInitialProps(context: AppContext<Query>) {
      const { claimNumber } = context.query;
      return { claimNumber };
    }

    public render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default Container;
