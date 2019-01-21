import * as React from 'react'
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
  </>
)
export default TextList
