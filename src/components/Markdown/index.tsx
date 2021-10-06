import { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Link } from 'react-router-dom'

import { CodeHighlighter } from '../CodeHighlighter'

interface Props {
  children: string | (() => string)
}

function normalizeText(input: string): string {
  const output = []
  const values = input.split('\n')
  let skipTrim = false

  const isCodeBlock = (value = '') =>
    value.startsWith('```') || value.startsWith('~~~')

  for (let i = 0; i < values.length; i++) {
    const value = values[i]

    if (isCodeBlock(value)) {
      skipTrim = true
    }

    output.push(skipTrim ? value : value.trim())

    if (skipTrim && isCodeBlock(values[i + 1])) {
      skipTrim = false
    }
  }

  return output.join('\n')
}

export function Markdown({ children }: Props) {
  const value = typeof children === 'string' ? children : children()
  const normalized = useMemo(() => normalizeText(value), [value])

  return (
    <ReactMarkdown
      remarkPlugins={[gfm]}
      children={normalized}
      components={{
        a({ href, children }) {
          const isExternalLink =
            href?.startsWith('/api/') || href?.startsWith('http')

          return isExternalLink ? (
            <a href={href} target="_blank">
              {children}
            </a>
          ) : (
            <Link to={href!}>{children}</Link>
          )
        },
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            // @ts-ignore
            <CodeHighlighter
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}
    />
  )
}
