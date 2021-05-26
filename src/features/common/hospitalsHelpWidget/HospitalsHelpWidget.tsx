import { default as React, useEffect, useState } from 'react';
import { useMappedState } from 'redux-react-hook';
import cx from 'classnames';

import { useScrollPosition } from '@app/node_modules/@n8tb1t/use-scroll-position';

import { getHospitalsHelpWidgetDataFromSanity } from '@front/domain/reducers/hospitalsHelpWidgetReducer';
import { selectHospitalsHelpWidgetData } from '@front/domain/reducers/hospitalsHelpWidgetReducer/selectHospitalHelpWidgetData';
import { useThunk } from '@front/helpers/hooks/useThunk';
import { NavLink } from '@front/ui/nav-link';

import * as styles from './HospitalsHelpWidget.css';

function declOfNum(n, titles) {
  return titles[
    n % 10 == 1 && n % 100 != 11
      ? 0
      : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
      ? 1
      : 2
  ];
}

const hospitals = (count) =>
  declOfNum(count, ['больница', 'больницы', 'больниц']);
const toHospitals = (count) =>
  declOfNum(count, ['больнице', 'больницам', 'больницам']);

const HospitalsHelpWidget = () => {
  const dispatch = useThunk();
  const [short, setShort] = useState(false);

  useEffect(() => {
    dispatch(getHospitalsHelpWidgetDataFromSanity());
  }, []);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      currPos.y < -400 ? setShort(true) : setShort(false);
    },
    [],
    undefined,
    false,
    50,
  );

  const data = useMappedState(selectHospitalsHelpWidgetData);

  return (
    <>
      {!!data && (
        <div className={cx(styles.popup, { [styles.short]: short })}>
          <div className={cx(styles.half, styles.extended)}>
            <span className={styles.label}>Закупили оборудование</span>
            <p className={styles.text}>
              {data.helpedCount} {toHospitals(data.helpedCount)}
              <br />
              на {new Intl.NumberFormat(['ru-RU']).format(
                data.moneyGathered,
              )} ₽{' '}
            </p>
          </div>
          <div className={styles.half}>
            <NavLink
              className={styles.buttonWrapper}
              withoutUnderline
              href="/#donation"
            >
              ❤️Поддержать
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export { HospitalsHelpWidget };
