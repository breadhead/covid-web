import { SubmitTooltip } from '@front/features/common/form/components/SubmitTooltip';
import { FormConstructor } from '@front/features/common/form/FormConstructor';
import { formConfig } from './formConfig';
import { ButtonSize, Button } from '@app/src/ui/button';
import cx from 'classnames'
import * as React from 'react';
import * as commonStyles from '@app/src/features/common/form/commonStyles.css';

import { saveWebinarRegistrationForm } from '@app/src/domain/reducers/requestConsultationReducer/actions'
import { useThunk } from '@app/src/helpers/hooks/useThunk';

import s from './RegisterForm.css';

interface RegisterFormProps {
  node: {
    webinarName: string
    startDate: string
    webinarLink: string
  }
}


export const RegisterForm = ({ node: { webinarName, startDate, webinarLink }}: RegisterFormProps) => {
  const dispatch = useThunk();
  const onSubmit = (data: any) => dispatch(saveWebinarRegistrationForm(data));

  return (
    <div className={s.wrapper}>
      <FormConstructor
        options={formConfig}
        onSubmit={onSubmit}
        saveDraft={console.log}
        initialValues={{ webinarName }}
      >
        {(context) => (
          <>
          <SubmitTooltip context={context} />
          <Button
            disabled={context.submitting}
            size={ButtonSize.ExtraLarge}
            className={cx(commonStyles.button, commonStyles.largeButton)}
            submit
          >
            Отправить
          </Button>
          </>
        )}
      </FormConstructor>
    </div>
  );
};
