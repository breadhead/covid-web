import * as React from 'react';

import { Button } from '@app/src/ui/button'
import RangePicker from '@app/features/admin/features/history/molecule/RangePicker';
import { useCallback } from 'react';
import { DEFAULT_START } from '../../../funnel/ClaimsFunnel';
import saveFile from 'js-file-download'
import { useApi } from '@app/lib/api/useApi';
import formatDate from '@app/features/client/features/claims/helpers/formatDate';

interface ReportCalendarProps {
  from: Date,
  to: Date,
  setFrom: (val: Date) => void,
  setTo: (val: Date) => void,
}

const now = new Date()

export const ReportCalendar = ({
  from,
  to,
  setFrom,
  setTo
}: ReportCalendarProps) => {


  const api = useApi()

  const changePeriod = useCallback(
    (dates: [Date, Date] | undefined) => {
      if (!dates) {
        setFrom(DEFAULT_START)
        setTo(now)
      } else {
        const [newFrom, newTo] = dates
        setFrom(newFrom)
        setTo(newTo)
      }
    },
    [setFrom],
  )

  const downloadFile = useCallback(
    async () => {
      if (!from || !to) {
        return
      }

      const file = await api.fetchTimeReportTable(from, to)
      saveFile(
        file,
        `Отчёт времени работы врачей ${formatDate(from)}-${formatDate(to)}.csv`,
      )
    },
    [from, to],
  )

  return (
    <div style={{ zIndex: 10 }}>
      <RangePicker
        dateIsDisabled={date => date < DEFAULT_START || date > now}
        onChange={changePeriod}
      />
      {!!from && !!to && (
        <div style={{ marginTop: '20px' }}>
          <Button onClick={downloadFile}>Скачать отчёт</Button>
        </div>
      )}
    </div>
  )
}
