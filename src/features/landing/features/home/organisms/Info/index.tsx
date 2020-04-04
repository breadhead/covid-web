import * as React from 'react';
import htmlParser from 'react-html-parser';

import * as styles from './Info.css';

interface DonationInfoProps {
  text: any;
}

const DonationInfo = ({ text }: DonationInfoProps) => (
  <article className={styles.quote}>
    <p className={styles.message}>{htmlParser(text)}</p>
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

export default DonationInfo;
