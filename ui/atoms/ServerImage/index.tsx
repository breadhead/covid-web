import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const { backUrl } = publicRuntimeConfig

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

const ServerImage = ({ src, ...rest }: Props) => (
  <img src={`${backUrl}/${src}`} {...rest} />
)

export default ServerImage
