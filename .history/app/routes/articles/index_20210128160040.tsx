import React from 'react'
import {useRouteData} from '@remix-run/react'
import Articles from '../../components/Articles'

export default function TeamIndex() {
  let {articles = []} = useRouteData()
  console.log({articles})
  return (
    <section className="my-3 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold my-12 text-gray-800 font-sans">
        Articles
      </h1>
      <Articles articles={articles} />
    </section>
  )
}
