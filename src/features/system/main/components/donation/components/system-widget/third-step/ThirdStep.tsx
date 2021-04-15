import React from 'react';

import { ShareButtons } from '@app/src/features/common/shareWidget/components/share-buttons/ShareButtons';

interface ThirdStepProps {
  styles: { [key: string]: string };
}

export const ThirdStep = ({ styles }: ThirdStepProps) => {
  return (
    <>
      <h2 className={styles.title}>Спасибо за помощь</h2>
      <p className={styles.text}>
        В наших силах сдержать распространение вируса и спасти жизнь того
        доктора, который спасет нас и наших близких!
      </p>
      <p className={styles.slogan}>Расскажите миру о добром деле:</p>
      <div className={styles.share}>
        <img 
          loading="lazy" 
          className={styles.photo}
          src="/static/images/support.png"
          alt={`В наших силах сдержать распространение вируса и спасти
           жизнь того доктора, который спасет нас и наших близких!`}
        />
        <ShareButtons inForm className={styles.shareButtons} />
      </div>
    </>
  );
};
