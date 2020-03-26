import * as React from 'react'
import * as styles from './Conclution.css'
import { getConclutionText } from '../../getConclutionText'

import { useMappedState } from 'redux-react-hook'
import { selectRequestForm } from './selectors'
import { ArticlesList } from '../articles'

export const Conclution = () => {
  const data = useMappedState(selectRequestForm)
  const [currentConclution, setConclution] = React.useState(null)

  React.useEffect(
    () => {
      const conclution = getConclutionText(data) as any
      setConclution(conclution)
    },
    [data],
  )

  return (
    <>
      {!!currentConclution && !!(currentConclution as any).text && (
        <p className={styles.text}>{(currentConclution as any).text}</p>
      )}
      {!!currentConclution && !!(currentConclution as any).articles && (
        <ArticlesList articles={(currentConclution as any).articles} />
      )}
    </>
  )
}
