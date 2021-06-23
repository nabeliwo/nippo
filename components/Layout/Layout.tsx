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

export const Layout = ({
  title,
  description = defaultConfig.description,
  slug,
  isHome = false,
  is404 = false,
  children,
}: Props) => {
  const formattedTitle = title ? `${title} | ${defaultConfig.title}` : defaultConfig.title
  const url = slug ? `${baseUrl}/${slug}` : baseUrl

  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="icon" href="/favicon.ico" />
        <title>{formattedTitle}</title>

        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={formattedTitle} />
        <meta property="og:type" content={isHome ? 'website' : 'article'} />
        <meta property="og:title" content={formattedTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={defaultConfig.author} />
        <meta name="twitter:title" content={formattedTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {is404 && <meta name="robots" content="noindex" />}
      </Head>

      <header>
        {isHome ? (
          <h1>{defaultConfig.title}</h1>
        ) : (
          <Link href="/">
            <a>{defaultConfig.title}</a>
          </Link>
        )}

        <p>
          {defaultConfig.description}
          <br />
          このページにはスタイルが当たっていません。あなたのブラウザが壊れたわけではないので安心してください。
        </p>
      </header>

      <main>{children}</main>

      <footer>
        <h2>Links</h2>

        <ul>
          <li>
            <a href={`https://github.com/${defaultConfig.author}/nippo`} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={`https://twitter.com/${defaultConfig.author}`} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
        </ul>

        <p>© 2019 nabeliwo.com</p>
      </footer>
    </>
  )
}
