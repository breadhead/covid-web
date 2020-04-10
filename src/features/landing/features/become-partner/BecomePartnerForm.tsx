import React from 'react';
import cx from 'classnames';

import { FormConstructor } from '@app/src/features/common/form/FormConstructor';
import * as commonStyles from '@app/src/features/common/form/commonStyles.css';
import { ButtonSize, Button } from '@app/src/ui/button';
import { SubmitTooltip } from '@app/src/features/common/form/components/SubmitTooltip';
import { useThunk } from '@app/src/helpers/hooks/useThunk';
import { savePartnerForm } from '@app/src/domain/reducers/requestConsultationReducer/actions';

import * as styles from './BecomePartnerForm.css';
import { formConfig } from './formConfig';
import { mapThemeValueToSelectLabel } from './mapThemeValueToSelectLabel';

interface BecomePartnerFormProps {
  themeValue: string;
}

export const BecomePartnerForm = ({ themeValue }: BecomePartnerFormProps) => {
  const dispatch = useThunk();

  const onSubmit = (data: any) => {
    return dispatch(savePartnerForm(data));
  };

  const initialValues = { theme: mapThemeValueToSelectLabel[themeValue] };

  return (
    <FormConstructor
      resetAfterSubmit
      className={styles.wrapper}
      options={formConfig}
      initialValues={initialValues}
      onSubmit={onSubmit}
      saveDraft={console.log}
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
  );
};
