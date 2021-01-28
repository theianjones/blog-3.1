import * as React from 'react'
import {Outlet} from 'react-router-dom'

export function meta() {
  return {
    title: 'Ian Jones | Courses',
    description: 'Bitesized video courses',
  }
}

export function headers({loaderHeaders}: {loaderHeaders: Headers}) {
  return loaderHeaders
}

function Courses() {
  return (
    <main className="my-3">
      <Outlet />
    </main>
  )
}

export default Courses
