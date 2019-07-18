import * as React from 'react'

interface Props {
  img: string
}

export const PreviewImage = ({ img }: Props) => {
  const currentImg = img.replace(/&/g, '/')
  return <img src={`http://${currentImg}`} />
}
