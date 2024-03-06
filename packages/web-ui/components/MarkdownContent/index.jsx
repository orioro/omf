import ReactMarkdown from 'react-markdown'
import { RichText } from '../RichText'
import remarkGfm from 'remark-gfm'

export function MarkdownContent({ className, ...props }) {
  return (
    <RichText className={className}>
      <ReactMarkdown {...props} remarkPlugins={[remarkGfm]} />
    </RichText>
  )
}
