import * as React from 'react'
import { Icon } from '@app/src/ui/icon'
import { IconsList } from '@app/src/ui/sprite'
import * as s from './RotationPanel.css'
import cx from 'classnames'

interface Props {
  angle: number
  setAngle: (num: number) => void
}

export const RotationPanel = ({ angle, setAngle }: Props) => {
  return (
    <section className={s.panel}>
      <button className={s.button} onClick={() => setAngle(angle - 90)}>
        <Icon className={cx(s.icon, s.leftIcon)} name={IconsList.RotateIcon} />
      </button>
      <button className={s.button} onClick={() => setAngle(angle + 90)}>
        <Icon className={cx(s.icon, s.rightIcon)} name={IconsList.RotateIcon} />
      </button>
    </section>
  )
}
