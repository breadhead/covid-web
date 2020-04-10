import { parse, isAfter } from 'date-fns';
import cx from 'classnames';
import * as React from 'react';

import { ButtonSize, Button } from '@app/src/ui/button';
import * as commonStyles from '@app/src/features/common/form/commonStyles.css';
import { saveWebinarRegistrationForm } from '@app/src/domain/reducers/requestConsultationReducer/actions';
import { useThunk } from '@app/src/helpers/hooks/useThunk';
import { ArticlesItem } from '@app/src/domain/models/common/ArticlesItem';
import { formatDateWithTime } from '@app/src/helpers/formatDate';
import { hasWebinarStarted } from '@app/src/helpers/hasWebinarStarted.tsx';

import { FormConstructor } from '@front/features/common/form/FormConstructor';
import { SubmitTooltip } from '@front/features/common/form/components/SubmitTooltip';

import { formConfig } from './formConfig';
import s from './RegisterForm.css';

type WebinarInfo = {
  webinarName: string;
  startDate?: string;
  webinarLink?: string;
};

interface RegisterFormProps {
  node: WebinarInfo;
}

export const RegisterForm = ({
  node: { webinarName, startDate, webinarLink },
  node,
}: RegisterFormProps) => {
  const dispatch = useThunk();
  const onSubmit = (data: any) => dispatch(saveWebinarRegistrationForm(data));
  const webinarStarted = hasWebinarStarted(startDate);

  return (
    <div className={cx(s.wrapper)}>
      {!webinarStarted && (
        <div className="gl-formContainer">
          <FormConstructor
            options={formConfig}
            onSubmit={onSubmit}
            saveDraft={console.log}
            initialValues={{ webinarName }}
            badge={<Badge data={node} />}
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

const Badge = ({ data }: { data: WebinarInfo }) => {
  return (
    <div className={s.badgeWrapper}>
      <div className={s.badgeTitle}>
        Записаться на вебинар «{data.webinarName}»
      </div>
      {data.startDate && (
        <div className={s.text}>
          Вебинар начнётся {formatDateWithTime(data.startDate)}. На указанный
          адрес эл. почты прийдёт ссылка на вебинар
        </div>
      )}
    </div>
  );
};
