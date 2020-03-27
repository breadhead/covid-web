import * as React from "react";

import * as styles from "./Info.css";

import { NON_BREAKING_SPACE } from "@app/lib/config";

const Info = () => (
  <article className={styles.quote}>
    <p className={styles.message}>
      <div>
        Мы создали сервис, помогающий найти ответы на вопросы о COVID-19. Это справочник с проверенной информацией, консультации с экспертами и мероприятия для просвещения врачей всей страны.
      </div>
      <br />
      <div>
        Мы собираем средства на координацию работы врачей-волонтеров и обеспечение технической работы сервиса.
      </div>
      <br />
      <div>
        Поддерживая справочную службу, вы помогаете снизить нагрузку на систему здравоохранения, чтобы быстрее победить эпидемию и сохранить здоровье людей.
      </div>
    </p>
    <div className={styles.author}>
      <img
        className={styles.authorPhoto}
        src="/static/images/fomin_avatar.jpg"
        alt="Илья Фоминцев"
      />
      <div className={styles.textWrapper}>
        <p className={styles.authorName}>Илья Фоминцев</p>
        <p className={styles.authorPosition}>
          Исполнительный директор
          <br />
          «Фонда профилактики рака»
        </p>
      </div>
    </div>
  </article>
);

export default Info;
