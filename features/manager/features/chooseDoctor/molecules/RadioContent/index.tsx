import * as React from 'react'
import * as styles from './RadioContent.css'

interface Props {
  title: string
  subtitle: string
}

const RadioContent = ({ title, subtitle }: Props) => (
  <div className={styles.RadioContent}>
    <div className={styles.Title}>{title}</div>
    <div className={styles.Subtitle}>{subtitle}</div>
  </div>
)

export default RadioContent
