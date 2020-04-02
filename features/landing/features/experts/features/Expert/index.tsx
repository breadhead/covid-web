import * as React from 'react';

import { AppContext } from '@app/lib/server-types';

import { experts } from '../../config';
import ExpertPage from './page';

interface Props {
  expert: any;
}

interface Query {
  id: string;
}

class Expert extends React.Component<Partial<Props>> {
  public static getInitialProps({ query }: AppContext<Query>) {
    const { id } = query;

    const expert = experts.find((e) => e.id === id);

    return { expert };
  }

  public render() {
    const { expert } = this.props;

    return !!expert ? <ExpertPage expert={expert} /> : null;
  }
}

export default Expert;
