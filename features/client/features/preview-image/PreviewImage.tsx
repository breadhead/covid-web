import * as React from 'react'
import * as s from './PreviewImage.css'

interface Props {
  img: string
}

export const PreviewImage = ({ img }: Props) => {
  const prefix = process.env.NODE_ENV === 'development' ? '//' : ''

  return <img className={s.img} src={`${prefix}${img}`} />
}
