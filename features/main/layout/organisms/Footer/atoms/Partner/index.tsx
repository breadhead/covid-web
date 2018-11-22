import * as React from 'react'
import * as styles from './Partner.css'

interface Props {
  text: string
  logo: string
}

const Partner = ({text, logo}: Props) => {
  return (
    <article className={styles.partner}>
      <p>{text}</p>
      <img className={styles.logo} src={logo} alt={text}/>
    </article>
  )
}

export default Partner
