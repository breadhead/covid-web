import * as React from 'react';
import * as styles from './CovidButtons.css';
import { Button, ButtonSize } from '@app/src/ui/button';


export const CovidButtons = () => {
  return (
    <div className={styles.buttons}>
      <Button size={ButtonSize.ExtraLarge}>Полный справочник по COVID-19</Button>
      <Button size={ButtonSize.ExtraLarge}>Персональная консультация</Button>
    </div>
  )
}
