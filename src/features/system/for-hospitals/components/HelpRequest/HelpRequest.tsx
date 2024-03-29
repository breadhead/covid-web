import * as React from 'react';
import cx from 'classnames';
import { useDispatch } from 'redux-react-hook';

import { saveForHospitalsForm } from '@app/src/domain/reducers/requestConsultationReducer/actions';
import { useThunk } from '@app/src/helpers/hooks/useThunk';

import s from './HelpRequest.css';
import { HospitalAidForm } from '../form/HospitalAidForm';
interface HelpRequestProps {}

export const HelpRequest = ({}: HelpRequestProps) => {
  const dispatch = useThunk();
  const onSubmit = (data: any) => dispatch(saveForHospitalsForm(data));

  return (
    <div className={s.helpRequest}>
      <div className={cx('gl-wrapper gl-section')}>
        <h2 id="help-request-form" className="gl-sectionTitle">
          Расскажите, какая помощь вам нужна
        </h2>
        <div className={cx(s.formContainer, 'gl-formContainer')}>
          <HospitalAidForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};
