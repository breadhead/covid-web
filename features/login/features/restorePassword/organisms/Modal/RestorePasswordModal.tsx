import * as React from 'react';

import ModalFooter from '@app/features/login/organisms/Footer';

import * as styles from './RestorePasswordModal.css';
import { NewPasswordForm } from '../new-password-form';
import { ResetForm } from '../reset-form';

interface Props {
  onResetFormSubmit: () => Promise<any>;
  onLoginFormSubmit: () => Promise<any>;
  error: boolean | string;
  openSignIn: () => void;
  openSignUp: () => void;
  phone: string | null;
}

const RestorePasswordModal = ({
  onResetFormSubmit,
  onLoginFormSubmit,
  openSignIn,
  openSignUp,
  phone,
}: Props) => {
  return (
    <article className={styles.popup}>
      {!!phone ? (
        <NewPasswordForm phone={phone} onFormSubmit={onLoginFormSubmit} />
      ) : (
        <ResetForm onFormSubmit={onResetFormSubmit} openSignUp={openSignUp} />
      )}
      <ModalFooter onOpenModalClick={openSignIn} />
    </article>
  );
};

export default RestorePasswordModal;
