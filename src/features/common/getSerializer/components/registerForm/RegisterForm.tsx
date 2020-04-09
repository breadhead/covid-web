import { parse, isAfter } from 'date-fns';
import cx from 'classnames';
import * as React from 'react';

import { ButtonSize, Button } from '@app/src/ui/button';
import * as commonStyles from '@app/src/features/common/form/commonStyles.css';
import { saveWebinarRegistrationForm } from '@app/src/domain/reducers/requestConsultationReducer/actions';
import { useThunk } from '@app/src/helpers/hooks/useThunk';

import { FormConstructor } from '@front/features/common/form/FormConstructor';
import { SubmitTooltip } from '@front/features/common/form/components/SubmitTooltip';

import { formConfig } from './formConfig';
import s from './RegisterForm.css';

interface RegisterFormProps {
  node: {
    webinarName: string;
    startDate?: string;
    webinarLink?: string;
  };
}

export const RegisterForm = ({
  node: { webinarName, startDate, webinarLink },
}: RegisterFormProps) => {
  const dispatch = useThunk();
  const onSubmit = (data: any) => dispatch(saveWebinarRegistrationForm(data));
  const webinarStarted = startDate && isAfter(new Date(), parse(startDate));

  return (
    <div className={s.wrapper}>
      {!webinarStarted && (
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
      )}
      {!!webinarStarted && !!webinarLink && (
        <a href={webinarLink}>Вебинар уже начался</a>
      )}
      {webinarStarted && !webinarLink && (
        <div>Регистрация на вебинар закрыта</div>
      )}
    </div>
  );
};
