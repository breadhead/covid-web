import { default as React, useEffect } from 'react';
import { useMappedState } from 'redux-react-hook';

import { getHospitalsHelpWidgetDataFromSanity } from '@front/domain/reducers/hospitalsHelpWidgetReducer';
import { selectHospitalsHelpWidgetData } from '@front/domain/reducers/hospitalsHelpWidgetReducer/selectHospitalHelpWidgetData';
import { useThunk } from '@front/helpers/hooks/useThunk';
import { AppContext } from '@front/lib/server-types';

const HospitalsHelpWidget = () => {
  const dispatch = useThunk();

  useEffect(() => {
    dispatch(getHospitalsHelpWidgetDataFromSanity());
  }, []);

  const data = useMappedState(selectHospitalsHelpWidgetData);

  return (
    <div>
      {!!data && (
        <>
          <p>Собрано: {data.helpedCount}</p>
          <p>Помогли: {data.helpWanted}</p>
          <p>Ждут помощи: {data.moneyGathered}</p>
        </>
      )}
    </div>
  );
};

export { HospitalsHelpWidget };
