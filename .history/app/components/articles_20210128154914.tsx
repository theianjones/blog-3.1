import React from 'react'
import {Link} from 'react-router-dom'
import {ArticleData} from '../../types'

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
