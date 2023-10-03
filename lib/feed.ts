import fs from 'fs'

import { parseISO } from 'date-fns'
import { Feed } from 'feed'

import siteConfig from '../site.config.json'

import { getPostDataForFeed } from './posts'

export const generateRssFeed = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_HOST ?? ''
  const { title, description, author } = siteConfig
  const date = new Date()

  const feed = new Feed({
    title,
    description,
    id: baseUrl,
    link: baseUrl,
    language: 'ja',
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, ${author}`,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
  })

  const posts = await getPostDataForFeed()

  posts.forEach((post) => {
    const url = `${baseUrl}/posts/${post.id}`
    feed.addItem({
      title: post.title,
      description: post.description ?? '',
      id: url,
      link: url,
      content: post.contentHtml,
      date: parseISO(post.date),
    })
  })

  fs.mkdirSync('./public/rss', { recursive: true })
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1())
  fs.writeFileSync('./public/rss/feed.json', feed.json1())
}
