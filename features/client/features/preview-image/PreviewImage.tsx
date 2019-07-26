import * as React from 'react'
import * as s from './PreviewImage.css'

interface Props {
  img: string
}

export const PreviewImage = ({ img }: Props) => {
  const currentImg = img.replace(/&/g, '/')
  return <img className={s.img} src={`http://${currentImg}`} />
}
