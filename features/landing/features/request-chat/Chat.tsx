import * as React from "react";
import { APP_ID } from "@app/features/common/intercom/config";
import { useMappedState } from "redux-react-hook";
import { getUserEmail } from "@app/features/login/features/confirm/reducer/selectors";

export const Chat = () => {
  const email = useMappedState(getUserEmail);
  const highRisk = true;

  React.useEffect(() => {
    if (!!email) {
      (window as any).Intercom("boot", {
        app_id: APP_ID,
        email: email,
        created_at: 1234567890,
        name: `${highRisk ? "[!]" : ""}${email}`,
        user_id: email
      });
    }
  }, []);

  return <></>;
};
