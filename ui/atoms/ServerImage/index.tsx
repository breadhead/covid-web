import { useMemo } from 'react'

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

const ServerImage = ({ src, ...rest }: Props) => {
  const path = useMemo(
    () => (src && src.startsWith('http') ? src : `//${src}`),
    [src],
  )

  return <img src={path} {...rest} />
}

export default ServerImage
