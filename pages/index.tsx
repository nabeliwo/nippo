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
                <Link href={`/posts/${id}`}>
                  <a className="text-xl underline">{title}</a>
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
