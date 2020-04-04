import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

import { APP_ID } from '@app/src/features/common/intercom/config';
import { getUserLogin } from '@app/src/features/login/features/user/selectors';
import { getUserEmailLocalStorage } from '@app/src/features/login/features/signIn/userEmailLocalStorage';

import { getCovidSymptoms } from './getConclutionText';
import {
  getFormattedForm,
  getRequestFormDraft,
} from '../request/organisms/RequestForm/localStorage';

function getCovid() {
  try {
    const result = getCovidSymptoms(getRequestFormDraft());
    return result;
  } catch (error) {
    return false;
  }
}

export const Chat = () => {
  console.log('Chat -> getCovid()', getCovid());

  const login = useMappedState(getUserLogin);

  console.log('Chat -> login', login);

  React.useEffect(() => {
    const email = getUserEmailLocalStorage();
    console.log('Chat -> email', email);

    if (!!email) {
      const result = {
        app_id: APP_ID,
        email: email,
        created_at: 1234567890,
        name: `${getCovid() ? '[!]' : ''}${email}`,
        user_id: email,
        ...getFormattedForm(),
      };
      (window as any).Intercom('boot', result);

      console.log('Chat -> result', result);
    }
  });

  return <></>;
};
