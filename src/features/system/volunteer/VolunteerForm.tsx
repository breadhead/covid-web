import React from 'react';
import cx from 'classnames';

import { FormConstructor } from '@app/src/features/common/form/FormConstructor';
import * as commonStyles from '@app/src/features/common/form/commonStyles.css';
import { ButtonSize, Button } from '@app/src/ui/button';

import * as styles from './VolunteerForm.css';
import { formConfig } from './formConfig';

interface Props {
  onSubmit: (data: any) => Promise<any>;
}

export const VolunteerForm = ({ onSubmit }: Props) => {
  return (
    <FormConstructor
      options={formConfig(styles)}
      onSubmit={onSubmit}
      saveDraft={console.log}
    >
      {(context) => (
        <Button
          disabled={context.submitting}
          size={ButtonSize.ExtraLarge}
          className={cx(commonStyles.button, commonStyles.largeButton)}
          submit
        >
          Отправить
        </Button>
      )}
    </FormConstructor>
  );
};
