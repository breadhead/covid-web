import ClientLayout from "@app/features/client/organisms/Layout";
import { FooterTheme } from "@app/ui/organisms/Footer";
import React from "react";
import { Chat } from "./Chat";
import { AskButton } from "./components/askButton";
import { Conclution } from "./components/Conclution";
import * as styles from "./RequestChat.css";


export const RequestChat = () => {
  return (
    <ClientLayout
      headerClassName={styles.mainHeader}
      pageClassName={styles.page}
      footerTheme={FooterTheme.White}
    >
      <div className={styles.logo}>
        <img className={styles.image} src="/static/images/2-step.png" />
      </div>
      <Conclution />
      <AskButton>Спросить в чате 🤖👩🏻‍⚕️ &gt;</AskButton>
      <Chat />
    </ClientLayout>
  );
};
