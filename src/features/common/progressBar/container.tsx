import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Omit } from 'utility-types';

import { State } from '@app/src/lib/store';
import { getQuery } from '@app/src/features/common/browserQuery';

import { getStepsFactory, ProgressBarKind } from './helpers/getSteps';
import { Props as ComponentProps } from './organisms/ProgressBar';

interface Props {
  className?: string;
  step?: number;
  query?: any;
  stepNames?: string[];
  kind: ProgressBarKind;
}

// eslint-disable-next-line react/display-name
const Container = (WrappedComponent: React.ComponentType<ComponentProps>) => ({
  step = 0,
  query,
  kind,
  ...rest
}: Props) => {
  const current = step - 1;
  const id = query && query.id;
  const steps = getStepsFactory(kind)(id, current);

  return <WrappedComponent steps={steps} {...rest} />;
};

const mapState = (state: State) => ({
  query: getQuery(state),
});

export default compose<ComponentProps, Omit<Props, 'query'>>(
  connect(mapState),
  Container,
);
