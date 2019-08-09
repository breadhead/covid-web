import * as React from 'react'
import * as s from './PreviewImage.css'
import { RotationPanel } from './components/rotation-panel'
import { useState } from 'react'

interface Props {
  img: string
}

export const PreviewImage = ({ img }: Props) => {
  const [angle, setAngle] = useState(0)

  const prefix = process.env.NODE_ENV === 'development' ? '//' : ''

  return (
    <>
      <RotationPanel angle={angle} setAngle={setAngle} />
      <img
        style={{ transform: `rotateZ(${angle}deg)` }}
        className={s.img}
        src={`${prefix}${img}`}
      />
    </>
  )
}
