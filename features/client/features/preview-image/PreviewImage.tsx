import * as React from 'react'

interface Props {
  img: string
}

export const PreviewImage = ({ img }: Props) => {
  return <img src={img} />
}
