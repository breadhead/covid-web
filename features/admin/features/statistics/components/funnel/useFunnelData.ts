import { useState, useEffect } from 'react'
import { useApi } from '@app/lib/api/useApi'
import { Funnel } from '@app/models/Statistics/Funnel'

export const useFunnelData = (from: Date, to: Date) => {
  const [stats, setStats] = useState<Funnel | null>(null)
  const api = useApi()

  useEffect(
    () => {
      api.fetchFunnelStats(from, to).then(setStats)
    },
    [from, to],
  )

  if (!stats) {
    return []
  }

  const data = [
    {
      id: 'new-claim',
      value: stats.shortClaims,
      name: `Первый шаг ${stats.shortClaims}`,
      fill: '#8884d8',
    },
    {
      id: 'situation-claim',
      value: stats.situationClaims,
      name: `Второй шаг ${stats.situationClaims}`,
      fill: '#83a6ed',
    },
    {
      id: 'question-claim',
      value: stats.finishedClaims,
      name: `Третий шаг ${stats.finishedClaims}`,
      fill: '#8dd1e1',
    },
    {
      id: 'sended-to-doctor',
      value: stats.sendedToDoctorClaims,
      name: `Отправлено врачу ${stats.sendedToDoctorClaims}`,
      fill: '#82ca9d',
    },
    {
      id: 'answer-validation',
      value: stats.answerValidationClaims,
      name: `Валидация ответа ${stats.answerValidationClaims}`,
      fill: '#a4de6c',
    },
    {
      id: 'sended-to-client',
      value: stats.sendedToClientClaims,
      name: `Отправлено клиенту ${stats.sendedToClientClaims}`,
      fill: '#FFCE55',
    },
    {
      id: 'successefully-closed',
      value: stats.successfullyClosedClaims,
      name: `Успешно закрыто ${stats.successfullyClosedClaims}`,
      fill: '#fc92c6',
    },
  ]

  return data
}
