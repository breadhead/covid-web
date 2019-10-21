import * as React from 'react'
import { useEffect, useState } from 'react'
import { useApi } from '@app/lib/api/useApi'
import { RatingValueQuestion } from '../../RatingValueQuestion'

export const Rating = () => {
  const [data, setData] = useState<RatingValueQuestion[] | null>(null)

  const api = useApi()

  useEffect(() => {
    api.fetchRatingReport().then(setData)
  }, [])

  return !!data ? (
    data.map((q: any) =>
      Object.entries(q).map(([questionKey, questionValue]) => {
        return (
          <>
            <p>{questionKey}</p>
            {Object.entries(questionValue).map(([_, value]) =>
              Object.entries(value).map(([key, val]) => (
                <>
                  <p>{key}</p>
                  <p>
                    количество ответов
                    {(val as any).count}
                  </p>
                  <p>
                    процентное соотношение
                    {(val as any).percentage}
                  </p>
                </>
              )),
            )}
          </>
        )
      }),
    )
  ) : (
    <div>eemem</div>
  )
}
