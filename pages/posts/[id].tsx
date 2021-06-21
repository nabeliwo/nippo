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
      <p>
        <Datetime dateString={postData.date} />
      </p>

      <h1>{postData.title}</h1>

      <div>
        <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>

      <div>
        <Link href="/">
          <a>← Back To Home</a>
        </Link>
      </div>
    </section>
  </Layout>
)

export default Post
