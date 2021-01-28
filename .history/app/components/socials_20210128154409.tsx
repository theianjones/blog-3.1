import React from 'react'

type Social = {
  label: string
  url: string
}

export default ({socials}: {socials: Social[]}) => (
  <>
    {socials.map((social) => (
      <a
        key={social.label}
        className="mr-3 text-lg font-light hover:text-primary ease-in-out text-gray-500 tracking-wider"
        href={social.url}
        target="_blank"
      >
        {social.label}
      </a>
    ))}
  </>
)
