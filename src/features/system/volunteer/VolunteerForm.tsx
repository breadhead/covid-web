import React from 'react';
import cx from 'classnames';

import {FormConstructor} from '@app/src/features/common/form/FormConstructor';
import * as commonStyles from '@app/src/features/common/form/commonStyles.css';
import {Button, ButtonSize} from '@app/src/ui/button';

import * as styles from './VolunteerForm.css';
import {formConfig} from './formConfig';
import {SubmitTooltip} from '../../common/form/components/SubmitTooltip/SubmitTooltip';

interface Props {
  onSubmit: (data: any) => Promise<any>;
}

export const VolunteerForm = ({ onSubmit }: Props) => {
  return (
    <FormConstructor
      resetAfterSubmit
      options={formConfig(styles)}
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
