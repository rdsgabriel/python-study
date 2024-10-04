// components/MarkdownContent.tsx
export default function MarkdownContent({ content }: { content: string }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} className="prose lg:prose-xl" />
}