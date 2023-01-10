import Link from 'next/link'
import React from 'react'

import { Layout } from '../components/Layout'

const Post = () => (
  <Layout is404>
    <section>
      <h1 className="py-20 text-3xl">404 - Page Not Found</h1>

      <div>
        <Link href="/" className="underline">
          ← Back To Home
        </Link>
      </div>
    </section>
  </Layout>
)

export default Post
