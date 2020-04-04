import * as React from 'react';

import { AppContext } from '@app/lib/server-types';
import ExpertPage from './page';
import {getExpertsFromSanity} from "@app/features/common/expertReducer";
import {useMappedState} from "redux-react-hook";
import {selectExperts} from "@app/features/common/expertReducer/selectExperts";

interface Props {
  id: string;
}

interface Query {
  id: string;
}

const Expert = ({id}: Props) => {
  const experts = useMappedState(selectExperts);
  const expert = experts.find((e) => e.code.current === id);

  return (
    !!expert ? <ExpertPage expert={expert} /> : ''
  )
}

Expert.getInitialProps = async (context: AppContext<Query>) => {
  await context.reduxStore.dispatch(getExpertsFromSanity() as any);
  const id = context.query.id;

  return {id}
};

export default Expert;
