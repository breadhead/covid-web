import { PreviewImage } from '@app/features/client'
import { AppContext } from '@app/lib/server-types'

interface Query {
  img: string
}

interface Props {
  img: string
}

const PreviewImagePage = ({ img }: Props) => {
  return <PreviewImage img={img} />
}

PreviewImagePage.getInitialProps = (ctx: AppContext<Query>) => {
  return {
    img: ctx.query.img,
  }
}

export default PreviewImagePage
