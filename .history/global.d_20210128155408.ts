type ArticleMetadata = {
  title: string
  description: string
  tags?: string[]
  date?: Date
  growthStage?: 'evergreen' | 'budding' | 'seedling'
}

type MdxFrontmatter = {
  meta: ArticleMetadata
}

type ArticleData = {
  path: string
  slug: string
  meta?: ArticleMetadata
}

type Social = {
  label: string
  url: string
}
