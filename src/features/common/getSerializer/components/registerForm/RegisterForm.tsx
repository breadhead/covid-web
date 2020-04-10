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
import { useArticleContext } from '@app/src/features/system/for-doctors/components/articles-item-content/articleContext';
import { ActionBlock } from '@app/src/ui/actionBlock';

import { FormConstructor } from '@front/features/common/form/FormConstructor';
import { SubmitTooltip } from '@front/features/common/form/components/SubmitTooltip';

import { formConfig } from './formConfig';
import s from './RegisterForm.css';

type WebinarInfo = {
  webinarLink?: string;
};

interface RegisterFormProps {
  node: WebinarInfo;
}

export const RegisterForm = ({ node: { webinarLink } }: RegisterFormProps) => {
  const dispatch = useThunk();

  const onSubmit = (data: any) => dispatch(saveWebinarRegistrationForm(data));
  const articleContext = useArticleContext();

  if (!articleContext.data) return null;
  const webinarStarted = hasWebinarStarted(articleContext.data.webinarDate);

  return (
    <div className={cx(s.wrapper)}>
      {!webinarStarted ? (
        <div className="gl-formContainer">
          <FormConstructor
            options={formConfig}
            onSubmit={onSubmit}
            saveDraft={console.log}
            initialValues={{ webinarName: articleContext.data.name }}
            badge={<Badge data={articleContext.data} />}
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
      ) : (
        <ActionBlock
          title={`Вебинар «${articleContext.data.name}»`}
          icon={<img src="/static/images/answers.png" />}
          text={
            articleContext.data.webinarDate
              ? formatDateWithTime(articleContext.data.webinarDate)
              : undefined
          }
          buttonText="Смотреть вебинар"
          href={webinarLink}
        ></ActionBlock>
      )}
    </div>
  );
};

const Badge = ({ data }: { data: ArticlesItem }) => {
  return (
    <div className={s.badgeWrapper}>
      <div className={s.badgeTitle}>Записаться на вебинар «{data.name}»</div>
      {data.webinarDate && (
        <div className={s.text}>
          Вебинар начнётся {formatDateWithTime(data.webinarDate)}. На указанный
          адрес эл. почты прийдёт ссылка на вебинар
        </div>
      )}
    </div>
  );
};
