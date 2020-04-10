import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

import { AppContext } from '@app/src/lib/server-types';
import { getExpertBoardFromSanity } from '@app/src/domain/reducers/expertBoardReducer';
import { selectExpertBoard } from '@app/src/domain/reducers/expertBoardReducer/selectExperts';

import SupervisorPage from './page';

interface Props {
  id: string;
}

interface Query {
  id: string;
}

const Expert = ({ id }: Props) => {
  const experts = useMappedState(selectExpertBoard);
  const expert = experts.find((e) => e.code.current === id);

  return !!expert ? <SupervisorPage expert={expert} /> : null;
};

Expert.getInitialProps = async (context: AppContext<Query>) => {
  await context.reduxStore.dispatch(getExpertBoardFromSanity() as any);
  const id = context.query.id;

  return { id };
};

export default Expert;
