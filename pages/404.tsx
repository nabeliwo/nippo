import React from 'react'
import Link from 'next/link'

import { Layout } from '../components/Layout'

const Post = () => (
  <Layout is404>
    <section>
      <h1 className="py-20 text-3xl">404 - Page Not Found</h1>

      <div>
        <Link href="/">
          <a>← Back To Home</a>
        </Link>
      </div>
    </section>
  </Layout>
)

export default Post
