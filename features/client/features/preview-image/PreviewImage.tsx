import * as React from 'react'
import * as s from './PreviewImage.css'

interface Props {
  img: string
}

export const PreviewImage = ({ img }: Props) => {
  return <img className={s.img} src={`${img}`} />
}
