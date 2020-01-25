import * as React from 'react';
import { DoctorStatsReport } from '@app/features/admin/features/statistics/types/DoctorStatsReport';
import { GraphType } from '../../DetailGraph';

interface DetailCommonProps {
  data: DoctorStatsReport
  type: GraphType
}

export const DetailCommon = ({ data }: DetailCommonProps) => {

  const {
    success,
    failure,
    closedByClient,
    all
  } = data


  
  return (<div>
    <p>Закрытых вовремя: {success}</p>
    <p>Просроченных: {failure}</p>
    <p>Закрытых клиентом: {closedByClient}</p>
    <p>Всего: {all}</p>
  </div>)
}
