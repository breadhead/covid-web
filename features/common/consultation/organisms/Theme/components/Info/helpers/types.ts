export interface Article {
  subtitle: string
  text?: string
}

export interface InfoBlock {
  title: string
  articles: Article[]
}
