import * as React from 'react';
import cx from 'classnames';
import { useDispatch } from 'redux-react-hook';

import { HospitalAidForm } from '@app/src/features/system/for-clinics/components/form/HospitalAidForm';
import { saveForClinicsForm } from '@app/src/domain/reducers/requestConsultationReducer/actions';
import { useThunk } from '@app/src/helpers/hooks/useThunk';

import s from './HelpRequest.css';
interface HelpRequestProps {}

export const HelpRequest = ({}: HelpRequestProps) => {
  const dispatch = useThunk();
  const [submitted, setSubmitted] = React.useState(false);
  const onSubmit = (data: any) =>
    dispatch(saveForClinicsForm(data)).then(() => setSubmitted(true));

  return (
    <div className={s.helpRequest}>
      <div className={cx('gl-wrapper gl-section', s.wrapper)}>
        <h2 className="gl-sectionTitle">Расскажите, какая помощь вам нужна</h2>
        <div className={s.body}>
          <div className={s.formContainer}>
            {submitted ? (
              <div className="gl-sectionTitle">Спасибо за обращение!</div>
            ) : (
              <HospitalAidForm onSubmit={onSubmit} />
            )}
          </div>
          <div className={s.bubble}>Нужен новый текст!!!</div>
        </div>
      </div>
    </div>
  );
};
