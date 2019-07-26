import * as React from 'react'
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
  // console.log('ctx:', ctx.query)
  return {
    img: ctx.query.img,
    // img: 'gtc'
  }
}

export default PreviewImagePage
