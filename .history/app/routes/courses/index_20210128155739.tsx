import * as React from 'react'
import {useRouteData} from '@remix-run/react'
import Courses from '../../components/Courses'
export function meta() {
  return {
    title: 'Ian Jones | Courses',
    description: 'Bitesized video courses',
  }
}

export function headers({loaderHeaders}: {loaderHeaders: Headers}) {
  return loaderHeaders
}

function CoursesIndex() {
  const {courses = []} = useRouteData()
  return (
    <section className="my-3 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold my-12 text-gray-800 font-sans">
        Courses
      </h1>
      <Courses courses={courses.reverse()} />
    </section>
  )
}

export default CoursesIndex
