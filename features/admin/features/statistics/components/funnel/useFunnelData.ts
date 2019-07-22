import { useState, useEffect } from 'react'
import { useApi } from '@app/lib/api/useApi'

export const useFunnelData = () => {
  const [stats, setStats] = useState<any | null>(null)
  const api = useApi()

  useEffect(() => {
    const fetchData = async () => {
      await api
        .fetchFunnelStats({
          from: new Date('2019-02-01'),
          to: new Date('2019-07-22'),
        })
        .then(setStats)
    }
    fetchData()
  }, [])

  console.log('stats:', stats)
  const data = [
    {
      id: 'bercut',
      value: 100,
      name: 'Беркут',
      fill: '#8884d8',
    },
    {
      id: 'gavrilucov',
      value: 80,
      name: 'Гаврилюков',
      fill: '#83a6ed',
    },
    {
      id: 'zaitseva',
      value: 50,
      name: 'Зайцева',
      fill: '#8dd1e1',
    },
    {
      id: 'corobeinicova',
      value: 40,
      name: 'Коробейникова',
      fill: '#82ca9d',
    },
    {
      id: 'stepanova',
      value: 26,
      name: 'Степанова',
      fill: '#a4de6c',
    },
  ]

  return data
}
