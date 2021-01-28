import React from 'react'
import {Link} from 'react-router-dom'

type ArticleMetadata = {
  title: string
  description: string
  tags?: string[]
  date?: Date
  growthStage?: 'evergreen' | 'budding' | 'seedling'
}

type ArticleData = {
  path: string
  slug: string
  meta?: ArticleMetadata
}

interface ArticleItemProps {
  article: ArticleData
}

const ArticleListItem = ({article}: ArticleItemProps) =>
  article ? (
    <li
      key={article.slug}
      className="py-3 px-2 rounded hover:shadow-lg hover:text-primary cursor-pointer transition ease-in-out duration-300 transform hover:scale-105  text-gray-800"
    >
      <Link to={article.path}>{article?.meta?.title}</Link>
    </li>
  ) : null

interface ArticlesProps {
  articles: ArticleData[]
}

const Articles = ({articles}: ArticlesProps) => {
  return (
    <ul className="font-serif text-gray-600 text-xl list-none">
      {articles.map((article: any) => (
        <ArticleListItem key={article.slug} article={article} />
      ))}
    </ul>
  )
}

export default Articles
