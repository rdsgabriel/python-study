import { getSortedPostsData } from '../lib/markdown'
import BlogPosts from './BlogPosts'

export default function Home() {
  const allPostsData = getSortedPostsData().reverse()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Boca = Expert em Python</h1>
      <BlogPosts initialPosts={allPostsData} />
    </div>
  )
}