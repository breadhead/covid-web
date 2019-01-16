import { InfoBlock } from './types'

export default (infoBlocks: InfoBlock[]) =>
  infoBlocks.filter(({ articles }) => articles.length > 0)
