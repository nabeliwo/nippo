import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'

import { Datetime } from '../components/Datetime'
import { Layout } from '../components/Layout'
import { generateRssFeed } from '../lib/feed'
import { getSortedPostData } from '../lib/posts'

export const getStaticProps: GetStaticProps = async () => {
  await generateRssFeed()
  const allPosts = getSortedPostData()

  return {
    props: {
      allPosts,
    },
  }
}

type Props = {
  allPosts: Array<{
    id: string
    date: string
    title: string
  }>
}

const Home = ({ allPosts }: Props) => (
  <Layout isHome>
    <section>
      <ul>
        {allPosts.map(({ id, date, title }) => (
          <li key={id}>
            <article className="py-4">
              <p className="mb-1">
                <Datetime dateString={date} />
              </p>

              <p>
                <Link href={`/posts/${id}`} className="text-xl underline">
                  {title}
                </Link>
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default Home
