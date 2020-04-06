import React, { Dispatch, SetStateAction } from 'react';

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
      <img
        className={styles.photo}
        src="/static/images/support.png"
        alt={`В наших силах сдержать распространение вируса и спасти
         жизнь того доктора, который спасет нас и наших близких!`}
      />
    </>
  );
};
