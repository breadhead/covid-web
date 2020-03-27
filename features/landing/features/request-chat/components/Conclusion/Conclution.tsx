import React, { useEffect, useState } from 'react'
import * as styles from './Conclution.css'
import { getConclutionText } from '../../getConclutionText'

import { useMappedState } from 'redux-react-hook'
import { selectRequestForm } from './selectors'
import { ArticlesList } from '../articles'

export const Conclution = () => {
  const data = useMappedState(selectRequestForm)
  const [currentConclution, setConclution] = useState(null)

  useEffect(
    () => {
      if (!!data) {
        const conclution = getConclutionText(data) as any
        setConclution(conclution)
      }

    },
    [data],
  )

  if (!currentConclution) {
    return <div className={styles.text}>Загружаем...</div>
  }

  return (
    <>
      <p className={styles.text}>{(currentConclution as any).text}</p>
      <ArticlesList articles={(currentConclution as any).articles} />
    </>
  )
}
