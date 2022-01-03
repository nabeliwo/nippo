import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import defaultConfig from '../../site.config.json'

const baseUrl = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'
const image = `${baseUrl}/images/thumbnail.png`

type Props = {
  title?: string
  description?: string
  slug?: string
  isHome?: boolean
  is404?: boolean
  children: ReactNode
}

export const Layout = ({ title, description, slug, isHome = false, is404 = false, children }: Props) => {
  const siteDescription = description ? description : defaultConfig.description
  const formattedTitle = title ? `${title} | ${defaultConfig.title}` : defaultConfig.title
  const url = slug ? `${baseUrl}/${slug}` : baseUrl

  return (
    <>
      <Head>
        <meta name="description" content={siteDescription} />
        <meta name="image" content={image} />
        <link rel="icon" href="/favicon.ico" />
        <title>{formattedTitle}</title>

        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={formattedTitle} />
        <meta property="og:type" content={isHome ? 'website' : 'article'} />
        <meta property="og:title" content={formattedTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={defaultConfig.author} />
        <meta name="twitter:title" content={formattedTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={image} />

        {is404 && <meta name="robots" content="noindex" />}
      </Head>

      <header className="container py-10 px-3 mx-auto max-w-2xl">
        {isHome ? (
          <>
            <h1 className="mb-2 text-2xl">{defaultConfig.title}</h1>
            <p>{defaultConfig.description}</p>
          </>
        ) : (
          <Link href="/">
            <a className="text-2xl underline">{defaultConfig.title}</a>
          </Link>
        )}
      </header>

      <main className="container px-3 mx-auto max-w-2xl">{children}</main>

      <footer className="container px-3 pt-20 pb-10 mx-auto max-w-2xl">
        <p className="mb-2">
          <a className="underline" href="https://nabeliwo.com" target="_blank" rel="noopener noreferrer">
            Portal
          </a>{' '}
          /{' '}
          <a
            className="underline"
            href={`https://github.com/${defaultConfig.author}/nippo`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          /{' '}
          <a className="underline" href={`https://twitter.com/${defaultConfig.author}`} target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </p>

        <p>© 2019 nabeliwo.com</p>
      </footer>
    </>
  )
}
