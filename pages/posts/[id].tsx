import React from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'

import { getAllPostIds, getPostData } from '../../lib/posts'

import { Layout } from '../../components/Layout'
import { Datetime } from '../../components/Datetime'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const postData = await getPostData(params?.id as string)

  return {
    props: {
      postData,
    },
  }
}

type Props = {
  postData: { id: string; title: string; date: string; description: string; contentHtml: string }
}

const Post = ({ postData }: Props) => (
  <Layout title={postData.title} description={postData.description}>
    <section>
      <p className="mb-2">
        <Datetime dateString={postData.date} />
      </p>

      <h1 className="mb-10 text-3xl">{postData.title}</h1>

      <div className="mb-20">
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <article className="markdown" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>

      <div>
        <Link href="/">
          <a className="underline">← Back To Home</a>
        </Link>
      </div>
    </section>
  </Layout>
)

export default Post
