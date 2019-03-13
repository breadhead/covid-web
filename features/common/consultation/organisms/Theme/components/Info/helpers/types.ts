export interface Article {
  children?: Article[]
  subtitle: string
  text?: string
  isUrl?: boolean
}

export interface InfoBlock {
  title: string
  articles: Article[]
}
