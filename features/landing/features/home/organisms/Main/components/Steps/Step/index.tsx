import * as React from 'react'

import * as styles from './Step.css'

export interface Step {
  img: string
  index: number
  text: string
}

interface StepProps {
  step: Step
}

const Step = ({ step }: StepProps) => {
  const { img, text, index } = step
  return (
    <article className={styles.step}>
      <img className={styles.img} src={img} alt={text} />
      <p className={styles.text}>
        {index}. {text}
      </p>
    </article>
  )
}

export default Step
