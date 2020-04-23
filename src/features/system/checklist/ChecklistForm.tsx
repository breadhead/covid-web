import React from 'react';
import cx from 'classnames';

import { FormConstructor } from '@app/src/features/common/form/FormConstructor';
import * as commonStyles from '@app/src/features/common/form/commonStyles.css';
import { ButtonSize, Button } from '@app/src/ui/button';
import { SubmitTooltip } from '@app/src/features/common/form/components/SubmitTooltip';

import * as styles from './ChecklistForm.css';
import { formConfig } from './formConfig';

interface Props {
  onSubmit: (data: any) => Promise<any>;
}
export const ChecklistForm = ({ onSubmit }: Props) => {
  return (
    <FormConstructor
      options={formConfig(styles)}
      onSubmit={onSubmit}
      saveDraft={console.log}
      className={styles.form}
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
