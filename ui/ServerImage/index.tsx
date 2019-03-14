type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

const ServerImage = ({ src, ...rest }: Props) => (
  <img src={`${src}`} {...rest} />
)

export default ServerImage
