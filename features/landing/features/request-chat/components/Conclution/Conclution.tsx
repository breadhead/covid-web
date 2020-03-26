import * as React from 'react'
import * as styles from './Conclution.css'
import { getConclutionText } from '../../getConclutionText'


import { useMappedState } from 'redux-react-hook'
import { selectRequestForm } from './selectors'
import { ArticlesList } from '../articles'


export const Conclution = () => {
  const data = useMappedState(selectRequestForm)

  return <>
    <ArticlesList />
    <p className={styles.text}>{getConclutionText(data)}</p>
  </>
}
