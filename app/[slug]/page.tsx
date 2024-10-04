// app/[slug]/page.tsx
import { getPostData, getAllPostSlugs } from '../../lib/markdown'
import Layout from '../../components/layout'
import MarkdownContent from '../../components/markdowncontent'

export async function generateStaticParams() {
  const paths = getAllPostSlugs()
  return paths
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug)

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
      <MarkdownContent content={postData.contentHtml} />
    </Layout>
  )
}