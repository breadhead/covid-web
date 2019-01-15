import { InfoBlock } from './types'

export default ({ articles, ...rest }: InfoBlock): InfoBlock => ({
  ...rest,
  articles: articles.filter(({ text }) => !!text),
})
