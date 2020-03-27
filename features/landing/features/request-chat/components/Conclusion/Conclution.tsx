import React, { useEffect, useState } from 'react'
import * as styles from './Conclution.css'
import { getConclutionText } from '../../getConclutionText'
import htmlParser from 'react-html-parser'
import store from 'store2'

import { useMappedState } from 'redux-react-hook'
import { selectRequestForm } from './selectors'
import { ArticlesList } from '../articles'

export const Conclution = () => {
  const data =
    useMappedState(selectRequestForm) || store.get('request_form') || {}
  const [currentConclution, setConclution] = useState(null)

  useEffect(
    () => {
      console.log('data:', data)
      if (!!data) {
        const conclution = getConclutionText(data) as any

        setConclution(conclution)
      }
    },
    [data.target],
  )

  if (!currentConclution) {
    return <div className={styles.text}>Загружаем...</div>
  }

  const { text, articles } = currentConclution as any
  console.log('text:', text)
  return (
    <>
      <p className={styles.text}>{htmlParser(text)}</p>
      <ArticlesList articles={articles} />
    </>
  )
}
