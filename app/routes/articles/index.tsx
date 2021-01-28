import React from 'react'
import {useRouteData} from '@remix-run/react'
import Articles from '../../components/Articles'
import {json, Loader} from '@remix-run/data'
import {getArticles} from '../../utils/getData'

export let loader: Loader = async () => {
  const articles = getArticles()

  return json(
    {
      articles,
    },
    {
      headers: {
        'cache-control': 'public, max-age=60, s-maxage=604800',
      },
    },
  )
}

export default function TeamIndex() {
  let {articles = []} = useRouteData()
  return (
    <section className="my-3 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold my-12 text-gray-800 font-sans">
        Articles
      </h1>
      <Articles articles={articles} />
    </section>
  )
}
