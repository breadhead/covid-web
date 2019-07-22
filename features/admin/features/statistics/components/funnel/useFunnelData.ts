import { useState, useEffect } from 'react'
import { useApi } from '@app/lib/api/useApi'
import { Funnel } from '@app/models/Statistics/Funnel'

export const useFunnelData = (from: Date | undefined, to: Date | undefined) => {
  const [stats, setStats] = useState<Funnel | null>(null)
  const api = useApi()

  useEffect(
    () => {
      const fetchData = async () => {
        const funnel = await api.fetchFunnelStats({ from, to })

        setStats(funnel)
      }
      fetchData()
    },
    [from, to],
  )

  if (!stats) {
    return null
  }

  const data = [
    {
      id: 'new-claim',
      value: stats.shortClaims,
      name: 'Первый шаг',
      fill: '#8884d8',
    },
    {
      id: 'situation-claim',
      value: stats.situationClaims,
      name: 'Второй шаг',
      fill: '#83a6ed',
    },
    {
      id: 'question-claim',
      value: stats.finishedClaims,
      name: 'Третий шаг',
      fill: '#8dd1e1',
    },
    {
      id: 'sended-to-doctor',
      value: stats.sendedToDoctorClaims,
      name: 'Отправлено врачу',
      fill: '#82ca9d',
    },
    {
      id: 'answer-validation',
      value: stats.answerValidationClaims,
      name: 'Валидация ответа',
      fill: '#a4de6c',
    },
    {
      id: 'sended-to-client',
      value: stats.sendedToClientClaims,
      name: 'Отправлено клиенту',
      fill: '#FFCE55',
    },
    {
      id: 'successefully-closed',
      value: stats.successfullyClosedClaims,
      name: 'Успешно закрыто',
      fill: '#fc92c6',
    },
  ]

  return data
}
