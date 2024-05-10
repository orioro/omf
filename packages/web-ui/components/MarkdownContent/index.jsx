import ReactMarkdown from 'react-markdown'
import { RichText } from '../RichText'
import remarkGfm from 'remark-gfm'

export function MarkdownContent({ className, style, ...props }) {
  return (
    <RichText className={className} style={style}>
      <ReactMarkdown {...props} remarkPlugins={[remarkGfm]} />
    </RichText>
  )
}
