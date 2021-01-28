import React from 'react'
import {Link} from 'react-router-dom'
import logo from 'img:./logo.png?quality=80&format=jpg&srcset=720,1080,2048&placeholder'

function Header() {
  return (
    <header className="flex flex-row items-center justify-between pt-24 sm:pt-12 md:pt-16 mb-5">
      {/* <Logo /> */}
      <Link to="/">
        <img
          className="h-12"
          alt="Ian Jones Logo"
          src={logo.src}
          srcSet={logo.srcset}
          style={{
            backgroundImage: `url(${logo.placeholder})`,
            backgroundSize: 'cover',
          }}
        />
      </Link>
      <nav className="flex items-center justify-between">
        <Link
          className="mr-3 text-lg font-light hover:text-primary ease-in-out text-gray-500 tracking-wider"
          to={'/courses'}
        >
          Courses
        </Link>
        <Link
          className="text-lg font-light hover:text-primary ease-in-out text-gray-500 tracking-wider"
          to={'/articles'}
        >
          Articles
        </Link>
      </nav>
    </header>
  )
}

export default Header
