import React from 'react';
import cx from 'classnames';

import { FormConstructor } from '@app/src/features/common/form/FormConstructor';
import * as commonStyles from '@app/src/features/common/form/commonStyles.css';
import { Button, ButtonSize } from '@app/src/ui/button';
import { SubmitTooltip } from '@app/src/features/common/form/components/SubmitTooltip';

import { formConfig } from './formConfig';

interface Props {
  onSubmit: (data: any) => Promise<any>;
}
export const HospitalAidForm = ({ onSubmit }: Props) => {
  return (
    <FormConstructor
      resetAfterSubmit
      options={formConfig}
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
