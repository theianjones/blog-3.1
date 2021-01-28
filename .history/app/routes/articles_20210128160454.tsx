import React from 'react'
import {Outlet} from 'react-router-dom'
import {MDXProvider} from '@mdx-js/react'
import components from '../components/MdxComponents'
import {useMatch} from 'react-router'

export function meta() {
  return {
    title: 'Ian Jones | Articles',
    description: 'My thoughts written in article format',
  }
}

export function headers({loaderHeaders}: {loaderHeaders: Headers}) {
  return loaderHeaders
}

export default function Articles() {
  const childPath = useMatch('/articles/:aid')
  return (
    <MDXProvider components={components}>
      <main
        className={`
      ${childPath ? 'markdown' : ''} my-3`}
      >
        <Outlet />
      </main>
    </MDXProvider>
  )
}
