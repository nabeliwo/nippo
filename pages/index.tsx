import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { getSortedPostData } from '../lib/posts'

import { Layout } from '../components/Layout'
import { Datetime } from '../components/Datetime'

export const getStaticProps: GetStaticProps = async () => {
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
    description: string
  }>
}

const Home = ({ allPosts }: Props) => (
  <Layout isHome>
    <section>
      <h2>Articles</h2>

      <ul>
        {allPosts.map(({ id, date, title, description }) => (
          <li key={id}>
            <article>
              <h3>
                <Link href={`/posts/${id}`}>
                  <a>
                    <Datetime dateString={date} /> {title}
                  </a>
                </Link>
              </h3>
              <p>{description}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default Home
