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
    <p className={styles.text}>Тест не гарантирует 100 % точности прогноза:</p>
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.id} className={styles.listItem}>
          {item.text}
        </li>
      ))}
    </ul>
  </>
)
export default TextList
