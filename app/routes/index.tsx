import {useRouteData} from '@remix-run/react'
import {json, Loader} from '@remix-run/data'
import {getArticles, getCourses} from '../utils/getData'
import includes from 'lodash/includes'
import takeRight from 'lodash/takeRight'
import {FrontMatterResult} from 'front-matter'
import Articles, {ArticleMetadata} from '../components/articles'
import Courses from '../components/courses'

type MdxFrontmatter = {
  meta: ArticleMetadata
}

export let loader: Loader = async () => {
  const featuredArticles = getArticles(
    (article: FrontMatterResult<MdxFrontmatter>) => {
      return includes(article.attributes?.tags, 'featured')
    },
  )

  const featuredCourses = takeRight(getCourses(), 3)

  return json(
    {
      featuredArticles,
      featuredCourses,
    },
    {
      headers: {
        'cache-control': 'public, max-age=60, s-maxage=604800',
      },
    },
  )
}

export function meta() {
  return {
    title: 'Ian Jones Blog',
    description:
      'I am a web developer from the Pacific North West but currently live in Northern Virginia.',
  }
}

export function headers({loaderHeaders}: {loaderHeaders: Headers}) {
  return loaderHeaders
}

export default function Index() {
  let data = useRouteData()
  return (
    <main className="my-3">
      <section className="my-24">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 font-sans">
          👋 Hey, I'm Ian
        </h1>
        <p className="font-serif mt-12 prose-xl max-w-60 text-gray-600">
          My name is Ian Jones. I am a web developer from the Pacific North West
          but currently live in Northern Virginia. I love geeking out on note
          taking systems and programming computers.
        </p>
        <p className="font-serif mt-4 prose-xl max-w-60 text-gray-600">
          I work primarily in Ruby and JavaScript but love functional
          programming languages. I'm currently learning Clojure/ClojureScript.
        </p>
        <p className="font-serif mt-5 prose-xl max-w-60 text-gray-600">
          One of my hobbies is working on my personal knowledge management
          system. I publish my work in progress notes to my digital garden. Go
          take a look!
        </p>
      </section>
      <section className="my-20">
        <h2 className="text-gray-500 text-3xl md:text-4xl mb-5">
          Featured Articles
        </h2>
        <Articles articles={data.featuredArticles} />
      </section>
      <section className="my-20">
        <h2 className="text-gray-500 text-3xl md:text-4xl">Video Courses</h2>
        <Courses courses={data.featuredCourses.reverse()} />
      </section>
    </main>
  )
}
