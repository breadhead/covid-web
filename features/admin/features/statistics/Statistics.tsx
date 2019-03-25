import saveFile from 'js-file-download'
import { useCallback, useMemo, useState } from 'react'

import formatDate from '@app/features/client/features/claims/helpers/formatDate'
import { useApi } from '@app/lib/api/useApi'
import { Button } from '@front/ui/button'

import Layout from '../../organisms/Layout'
import RangePicker from '../history/molecule/RangePicker'
import * as styles from './Statistics.css'

export const Statistics = () => {
  const api = useApi()

  const [onlyClosed, setOnlyClosed] = useState(false)
  const [from, setFrom] = useState<Date | undefined>(undefined)
  const [to, setTo] = useState<Date | undefined>(undefined)

  const changePeriod = useCallback(
    (newFrom?: Date, newTo?: Date) => {
      setFrom(newFrom)
      setTo(newTo)
    },
    [setFrom],
  )

  const fileName = useMemo(
    () => {
      if (!from || !to) {
        return ''
      }

      const mainName = onlyClosed
        ? 'Отчет по закрытым заявкам'
        : 'Отчет по всем заявкам'
      const rangeName = `${formatDate(from)}-${formatDate(to)}`

      return `${mainName} ${rangeName}.csv`
    },
    [from, to, onlyClosed],
  )

  const downloadFile = useCallback(
    async () => {
      if (!from || !to) {
        return
      }

      const file = await api.downloadReport(from, to, onlyClosed)
      saveFile(file, fileName)
    },
    [from, to, onlyClosed],
  )

  return (
    <Layout>
      <h1>Статистика</h1>

      <div className={styles.radioGroup}>
        <label>
          <input
            type="radio"
            name="onlyClosed"
            checked={!onlyClosed}
            onChange={() => setOnlyClosed(false)}
          />
          Все
        </label>

        <label>
          <input
            type="radio"
            name="onlyClosed"
            checked={onlyClosed}
            onChange={() => setOnlyClosed(true)}
          />
          Только закрытые
        </label>
      </div>

      <label className={styles.range}>
        {onlyClosed ? 'Дата закрытия' : 'Дата создания'}
        <RangePicker onChange={changePeriod} />
      </label>

      {!!from && !!to && (
        <Button className={styles.download} onClick={downloadFile}>
          Скачать отчет
        </Button>
      )}
    </Layout>
  )
}
