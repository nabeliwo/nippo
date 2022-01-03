import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkExternalLinks from 'remark-external-links'

type Post = {
  id: string
  date: string
  title: string
  description: string
}
type MatterResultData = Omit<Post, 'id' | 'date'>

const postsDirectory = path.join(process.cwd(), 'posts')

export const getSortedPostData = (): Post[] => {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData: Post[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      date: id,
      ...(matterResult.data as MatterResultData),
    }
  })

  return allPostsData.sort((post1, post2) => {
    if (post1.date < post2.date) {
      return 1
    } else {
      return -1
    }
  })
}

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(remarkExternalLinks, { target: '_blank', rel: ['nofollow', 'noreferrer'] })
    .use(html, { sanitize: false })
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    date: id,
    contentHtml,
    ...(matterResult.data as MatterResultData),
  }
}
