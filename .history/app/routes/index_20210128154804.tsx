import {useRouteData} from '@remix-run/react'
import type {Loader} from '@remix-run/data'

export let loader: Loader = async () => {
  return {message: 'this is awesome 😎'}
}

import React from 'react'
import {useRouteData} from '@remix-run/react'
import Articles from '../components/Articles'
import Courses from '../components/Courses'

export function meta() {
  return {
    title: 'Ian Jones Blog',
    description: 'Welcome to remix!',
  }
}

export function headers({loaderHeaders}: {loaderHeaders: Headers}) {
  return loaderHeaders
}

export default function Index() {
  let data: IndexRouteData = useRouteData()
  return (
    <main className="my-3">
      <section className="my-24">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 font-sans">
          👋 Hey, I'm Ian
        </h1>
        <p className="font-serif mt-12 prose-lg max-w-xl text-gray-600">
          I build websites in JavaScript and Ruby for egghead.io. I'm a fan of
          personal knowledge management and Clojure on the side!
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
