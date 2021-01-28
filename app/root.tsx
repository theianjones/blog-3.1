import type {Loader} from '@remix-run/data'
import {Meta, Scripts, Styles, useRouteData} from '@remix-run/react'
import {Outlet} from 'react-router-dom'
import Header from './components/header'
import Socials from './components/socials'
export let loader: Loader = async () => {
  return {date: new Date()}
}

export default function App() {
  let data = useRouteData()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Styles />
      </head>
      <body className="container">
        <Header />
        <Outlet />

        <hr className="border-gray-200" />
        <footer className="mt-2">
          <Socials socials={data.socials} />
        </footer>
        <Scripts />
      </body>
    </html>
  )
}

export function ErrorBoundary({error}: {error: Error}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Replace this UI with what you want users to see when your app throws
            uncaught errors. The file is at <code>app/App.tsx</code>.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  )
}
