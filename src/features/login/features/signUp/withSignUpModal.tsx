import React from 'react';

import { withModal, WithModalProps } from '@app/src/features/common/modal';

import { MODAL_KEY } from './container';

export interface WithSignUpModal {
  openSignUp: () => void;
}

const Container = (Component: React.ComponentType<any>) =>
  withModal(({ modal, ...props }: WithModalProps) => (
    <Component {...props} openSignUp={() => modal.open(MODAL_KEY)} />
  ));

export default Container;
