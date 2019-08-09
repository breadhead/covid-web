import * as React from 'react'
import { Icon } from '@app/src/ui/icon'
import { IconsList } from '@app/src/ui/sprite'

interface Props {
  angle: number
  setAngle: (num: number) => void
}

export const RotationPanel = ({ angle, setAngle }: Props) => {
  return (
    <>
      <button onClick={() => setAngle(angle - 90)}>
        left
        <Icon name={IconsList.RotateIcon} />
      </button>
      <button onClick={() => setAngle(angle + 90)}>right</button>
    </>
  )
}
