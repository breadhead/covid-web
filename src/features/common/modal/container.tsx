import cx from 'classnames';
import * as React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Action, AnyAction, Dispatch } from 'redux';

import { State } from '@app/src/lib/store';

import CloseButton from './atoms/CloseButton';
import { ModalDispatcher } from './helpers/ModalDispatcher';
import { shouldOpenModal } from './helpers/shouldModalOpen';
import styles from './index.css';
import { actions } from './reducer';
import { getModal } from './selectors';

interface Props {
  modal: string;
  close: () => Action;
  bodyScrolling: { lock: () => void; unlock: () => void };
  className?: string;
}

class Modal extends React.Component<Props> {
  public render() {
    const { modal, close, className } = this.props;

    const ModalComponent = this.getModalComponent(modal);

    return (
      <>
        <ReactModal
          shouldCloseOnOverlayClick
          className={cx(styles.Modal, className)}
          isOpen={shouldOpenModal(modal)}
          onRequestClose={close}
          ariaHideApp={false}
        >
          <CloseButton onClick={close} />
          {ModalComponent && <ModalComponent />}
        </ReactModal>
      </>
    );
  }

  private getModalComponent = (modal: string) =>
    ModalDispatcher.getInstance().components[modal];
}

const mapState = (state: State) => ({
  modal: getModal(state),
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  close: () => dispatch(actions.close()),
});

const hoc = compose<Props, {}>(connect(mapState, mapDispatch));

export default hoc(Modal);
