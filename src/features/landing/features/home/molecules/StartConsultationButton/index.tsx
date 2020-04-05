import * as React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import {withSignUpModal} from '@app/src/features/login';
import {Button, ButtonKind, ButtonSize} from '@app/src/ui/button';
import {NavLink} from '@app/src/ui/nav-link';

import {selectToken} from './selectors';

interface Props {
  children: string;
  token?: string;
  className?: string;
  containerClassName?: string;
  size?: ButtonSize;
}

const StartConsultationButton = ({
  className,
  containerClassName,
  size,
  children,
}: Props & any) => (
  <NavLink className={containerClassName} withoutUnderline href="/request">
    <Button size={size} className={className} kind={ButtonKind.Primary}>
      {children}
    </Button>
  </NavLink>
);

const mapState = (state: any) => ({
  token: selectToken(state),
});

export default compose<any, Props>(
  connect(mapState),
  withSignUpModal,
)(StartConsultationButton);
