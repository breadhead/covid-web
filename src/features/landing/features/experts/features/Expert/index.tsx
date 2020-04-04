import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

import { AppContext } from '@app/src/lib/server-types';
import { getExpertsFromSanity } from '@app/src/domain/reducers/expertReducer';
import { selectExperts } from '@app/src/domain/reducers/expertReducer/selectExperts';

import ExpertPage from './page';

interface Props {
  id: string;
}

interface Query {
  id: string;
}

const Expert = ({ id }: Props) => {
  const experts = useMappedState(selectExperts);
  const expert = experts.find((e) => e.code.current === id);

  return !!expert ? <ExpertPage expert={expert} /> : '';
};

Expert.getInitialProps = async (context: AppContext<Query>) => {
  await context.reduxStore.dispatch(getExpertsFromSanity() as any);
  const id = context.query.id;

  return { id };
};

export default Expert;
