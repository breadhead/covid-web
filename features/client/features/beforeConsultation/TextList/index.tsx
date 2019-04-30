import { NON_BREAKING_SPACE } from '@app/lib/config'
import * as React from 'react'
import { InfoText } from '../InfoText'
import styles from './TextList.css'

interface TextItem {
  id: string
  text: string
}

interface Props {
  items: TextItem[]
}

const TextList = ({ items }: Props) => (
  <>
    {items.map(item => (
      <p className={styles.text} key={item.id}>
        {item.text}
      </p>
    ))}
    <InfoText>
      В период майских праздников с{NON_BREAKING_SPACE}1{NON_BREAKING_SPACE}по
      {NON_BREAKING_SPACE}13 мая возможно увеличение времени ответа
      специалистов.
      <br />
      Пожалуйста, отнеситесь к{NON_BREAKING_SPACE}этому с{NON_BREAKING_SPACE}
      пониманием.
    </InfoText>
  </>
)
export default TextList
